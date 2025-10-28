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

        const { firstName, lastName, phone, email, country, project, purpose, timeframe, bedrooms, broker, projectName } = body;

        fetch('https://flow.zoho.com/897487424/flow/webhook/incoming?zapikey=1001.29babf23820fd4324119029324f75377.37f85460968769af10cba5f029bceb71&isdebug=false', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        // Save data on Common Email Collection
        await db.collection("project-enquiry").insertOne({
            firstName,
            lastName,
            phone,
            email,
            country,
            project,
            purpose,
            timeframe,
            bedrooms,
            broker,
            sourcePage: projectName,
            createdAt: new Date(), // timestamp
        });

        // const transporter = nodemailer.createTransport({
        //     host: process.env.EMAIL_HOST,
        //     port: Number(process.env.EMAIL_PORT),
        //     secure: false,
        //     auth: {
        //         user: process.env.EMAIL_USER,
        //         pass: process.env.EMAIL_PASS,
        //     },
        // });

        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_FROM,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_TO,
            cc: process.env.EMAIL_CC,
            subject: "New Project Enquiry Form Submission",
            html: `
                <h2>Project Enquiry Form Submitted</h2>
                <p><strong>First Name:</strong> ${firstName}</p>
                <p><strong>Last Name:</strong> ${lastName}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Country:</strong> ${country}</p>
                <p><strong>Selected Project:</strong> ${project}</p>
                <p><strong>What’s the purpose of buying?:</strong> ${purpose}</p>
                <p><strong>How soon are you looking to buy?:</strong> ${timeframe}</p>
                <p><strong>Number of bedrooms:</strong> ${bedrooms}</p>
                <p><strong>Are you assisted by a broker?:</strong> ${broker}</p>
                <p><strong>User submitted property enquiry form from?:</strong> ${projectName} page</p>
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