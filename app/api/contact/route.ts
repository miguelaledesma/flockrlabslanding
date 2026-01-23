import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("Resend API key not configured");
      console.log("Contact form submission (email service not configured):", {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString(),
      });

      return NextResponse.json(
        {
          error: "Email service not configured",
          message: "The contact form is temporarily unavailable. Please email us directly at flockr@flockrlabs.com",
        },
        { status: 503 }
      );
    }

    // Determine the "from" address
    // Use verified domain email (flockr@flockrlabs.com) or override via env
    // To verify a domain: https://resend.com/domains
    const fromAddress = process.env.RESEND_FROM_EMAIL || "flockr@flockrlabs.com";
    const toAddress = process.env.RESEND_TO_EMAIL || "flockr@flockrlabs.com";

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #333; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="margin: 20px 0; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", JSON.stringify(error, null, 2));
      console.error("Error type:", typeof error);
      console.error("Error details:", error);
      
      // Check for domain restriction error
      const errorMessage = error?.message || "Unknown error occurred";
      let userMessage = errorMessage;
      
      if (errorMessage.includes("domain restriction") || errorMessage.includes("resend.dev")) {
        userMessage = "Email domain not verified. The contact form requires a verified domain in Resend. Please email us directly at flockr@flockrlabs.com or contact the site administrator.";
        console.error("Domain restriction error - need to verify a domain in Resend");
        console.error("To fix: Verify a domain at https://resend.com/domains and set RESEND_FROM_EMAIL in .env.local");
      }
      
      return NextResponse.json(
        { 
          error: "Failed to send email",
          message: userMessage.includes("Please email us directly") 
            ? userMessage 
            : `There was an error sending your message: ${userMessage}. Please try again or email us directly at flockr@flockrlabs.com`,
          details: process.env.NODE_ENV === "development" ? error : undefined
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", messageId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    // Log the error details for debugging
    if (error instanceof Error) {
      console.error("Error details:", error.message, error.stack);
    } else {
      console.error("Unknown error type:", error);
    }
    
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
    return NextResponse.json(
      { 
        error: "Failed to send email",
        message: `There was an error sending your message: ${errorMessage}. Please try again or email us directly at flockr@flockrlabs.com`,
        details: process.env.NODE_ENV === "development" ? (error instanceof Error ? error.stack : String(error)) : undefined
      },
      { status: 500 }
    );
  }
}
