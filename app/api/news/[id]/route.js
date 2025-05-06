import { NextResponse } from "next/server";
import clientPromise from "@/lib/db";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
    try {
        const { id } = params;

        // Validate ID
        if (!ObjectId.isValid(id)) {
            return NextResponse.json({ success: false, message: "Invalid news ID" }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db("Takmeel");
        const newsCollection = db.collection("news");

        const newsItem = await newsCollection.findOne({ _id: new ObjectId(id) });

        if (!newsItem) {
            return NextResponse.json({ success: false, message: "News not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: newsItem });

    } catch (error) {
        console.error("Error fetching news by ID:", error);
        return NextResponse.json(
            { success: false, message: "Failed to fetch news", error },
            { status: 500 }
        );
    }
}


export async function PUT(req, { params }) {
    try {
        const { id } = params; // Access id from params

        if (!id) {
            return NextResponse.json(
                { success: false, message: "Missing news ID" },
                { status: 400 }
            );
        }

        const body = await req.json();
        const { coverImage, date, category, heading, subheading, content, visibility } = body;

        const client = await clientPromise;
        const db = client.db("Takmeel");

        const result = await db.collection("news").updateOne(
            { _id: new ObjectId(id) },
            {
                $set: {
                    coverImage,
                    date,
                    category,
                    heading,
                    subheading,
                    content,
                    visibility,
                },
            }
        );

        if (result.matchedCount === 0) {
            return NextResponse.json(
                { success: false, message: "News not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "News updated",
        });
    } catch (error) {
        console.error("Error updating news:", error);
        return NextResponse.json(
            { success: false, message: "Failed to update news", error },
            { status: 500 }
        );
    }
}