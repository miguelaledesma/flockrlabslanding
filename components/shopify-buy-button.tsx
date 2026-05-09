"use client";

import { useEffect, useRef } from "react";

// Shared Shopify storefront values (same across all products on the page).
const SHOPIFY_DOMAIN = "xhyidw-1c.myshopify.com";
const STOREFRONT_ACCESS_TOKEN = "9eeb704159448d473809bb94b02c53da";
const MONEY_FORMAT = "%24%7B%7Bamount%7D%7D";
const SCRIPT_URL =
  "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";

type ShopifyUI = {
  createComponent: (type: string, options: Record<string, unknown>) => void;
};

declare global {
  interface Window {
    ShopifyBuy?: {
      buildClient: (config: {
        domain: string;
        storefrontAccessToken: string;
      }) => unknown;
      UI?: {
        onReady: (client: unknown) => Promise<ShopifyUI>;
      };
    };
    __shopifyBuyButtonScriptPromise__?: Promise<void>;
    __shopifyBuyUIPromise__?: Promise<ShopifyUI>;
  }
}

// Load the Shopify Buy SDK exactly once per page lifecycle.
function loadShopifyScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.ShopifyBuy?.UI) return Promise.resolve();
  if (window.__shopifyBuyButtonScriptPromise__) {
    return window.__shopifyBuyButtonScriptPromise__;
  }

  window.__shopifyBuyButtonScriptPromise__ = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${SCRIPT_URL}"]`
    );
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () =>
        reject(new Error("Failed to load Shopify Buy SDK"))
      );
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = SCRIPT_URL;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Shopify Buy SDK"));
    (document.head || document.body).appendChild(script);
  });

  return window.__shopifyBuyButtonScriptPromise__;
}

// Build the Shopify UI client once and reuse it across product mounts so
// every product on the page shares a single cart.
function getShopifyUI(): Promise<ShopifyUI> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Shopify Buy SDK requires a browser"));
  }
  if (window.__shopifyBuyUIPromise__) return window.__shopifyBuyUIPromise__;

  window.__shopifyBuyUIPromise__ = loadShopifyScript().then(() => {
    if (!window.ShopifyBuy?.UI) {
      throw new Error("Shopify Buy SDK loaded without UI");
    }
    const client = window.ShopifyBuy.buildClient({
      domain: SHOPIFY_DOMAIN,
      storefrontAccessToken: STOREFRONT_ACCESS_TOKEN,
    });
    return window.ShopifyBuy.UI.onReady(client);
  });

  return window.__shopifyBuyUIPromise__;
}

// Brand-matched typography stack used inside Shopify-rendered iframes
// (cart, modal, toggle), where `inherit` from the page is not available.
const FONT_STACK =
  "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";

// Brand colors — match the site's Tailwind blue-600 / blue-700.
const BRAND_BLUE = "#2563eb";
const BRAND_BLUE_DARK = "#1d4ed8";

const buttonStyles = {
  "font-family": FONT_STACK,
  "font-weight": "600",
  "font-size": "15px",
  "padding-top": "16px",
  "padding-bottom": "16px",
  "background-color": BRAND_BLUE,
  ":hover": { "background-color": BRAND_BLUE_DARK },
  ":focus": { "background-color": BRAND_BLUE_DARK },
  "border-radius": "9999px",
};

const quantityInputStyles = {
  "font-size": "16px",
  "padding-top": "16px",
  "padding-bottom": "16px",
};

interface ShopifyBuyButtonProps {
  /** Shopify product ID (numeric string from the Buy Button snippet). */
  productId: string;
  /** Mount node ID — must match the `<div id='...'>` from the snippet. */
  nodeId: string;
}

export function ShopifyBuyButton({ productId, nodeId }: ShopifyBuyButtonProps) {
  const nodeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cancelled = false;
    const node = nodeRef.current;

    getShopifyUI()
      .then((ui) => {
        if (cancelled || !node) return;

        // Avoid duplicate components if the effect re-runs.
        node.innerHTML = "";

        ui.createComponent("product", {
          id: productId,
          node,
          moneyFormat: MONEY_FORMAT,
          options: {
            product: {
              styles: {
                // Let the parent container control width so each card
                // can sit centered around 360px–420px wide.
                product: {
                  "width": "100%",
                  "max-width": "100%",
                  "margin": "0 auto",
                  "text-align": "center",
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px",
                  },
                },
                title: { "text-align": "center" },
                prices: { "text-align": "center", "justify-content": "center" },
                price: { "text-align": "center" },
                compareAt: { "text-align": "center" },
                imgWrapper: { "text-align": "center", "margin": "0 auto" },
                img: { "margin": "0 auto", "display": "block" },
                button: buttonStyles,
                quantityInput: quantityInputStyles,
              },
              text: { button: "Add to cart" },
            },
            productSet: {
              styles: {
                products: {
                  "@media (min-width: 601px)": {
                    "margin-left": "0px",
                  },
                },
              },
            },
            modalProduct: {
              contents: {
                img: false,
                imgWithCarousel: true,
                button: false,
                buttonWithQuantity: true,
              },
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px",
                  },
                },
                button: buttonStyles,
                quantityInput: quantityInputStyles,
              },
              text: { button: "Add to cart" },
            },
            option: {},
            cart: {
              styles: { button: buttonStyles },
              text: { total: "Subtotal", button: "Checkout" },
            },
            toggle: {
              styles: {
                toggle: {
                  "font-family": FONT_STACK,
                  "font-weight": "600",
                  "background-color": BRAND_BLUE,
                  ":hover": { "background-color": BRAND_BLUE_DARK },
                  ":focus": { "background-color": BRAND_BLUE_DARK },
                },
                count: { "font-size": "16px" },
              },
            },
          },
        });
      })
      .catch((err) => {
        // Surface to console for debugging without breaking the page.
        // eslint-disable-next-line no-console
        console.error("Shopify Buy Button failed to load:", err);
      });

    return () => {
      cancelled = true;
      if (node) node.innerHTML = "";
    };
  }, [productId]);

  return (
    <div className="flex w-full justify-center">
      <div
        ref={nodeRef}
        id={nodeId}
        aria-label="Product purchase widget"
        className="w-full"
      />
    </div>
  );
}
