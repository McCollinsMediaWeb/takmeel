import { NextResponse } from "next/server";
import clientPromise from "@/lib/db";
import { ObjectId } from "mongodb";
import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const body = await req.json();

        if (!body) {
            return NextResponse.json(
                { success: false, message: "No data provided" },
                { status: 400 }
            );
        }

        const client = await clientPromise;
        const db = client.db("Takmeel");

        const { firstName, lastName, phone, email, cvUrl } = body;

        // Save data on Common Email Collection
        await db.collection("careers-form-submit").insertOne({
            firstName,
            lastName,
            phone,
            email,
            cvUrl,
            createdAt: new Date(), // timestamp
        });

        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: "sahad@mccollinsmedia.com",
                pass: "muwjfkkhclpsvrgg",
            },
        });

        const mailOptions = {
            from: "sahad@mccollinsmedia.com",
            to: "sahad@mccollinsmedia.com",
            subject: "New Form Submission",
            html: `
                <h2>Careers Form Submitted</h2>
                <p><strong>First Name:</strong> ${firstName}</p>
                <p><strong>Last Name:</strong> ${lastName}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>CV:</strong> ${cvUrl}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({
            success: true,
            message: "Form submitted and email sent successfully.",
        });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { success: false, message: "Something went wrong", error },
            { status: 500 }
        );
    }
}