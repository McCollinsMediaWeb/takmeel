import { NextResponse } from "next/server";
import clientPromise from "@/lib/db";
import { ObjectId } from "mongodb";

export async function GET(req) {
    try {
        const client = await clientPromise;
        const db = client.db("Takmeel");

        const url = new URL(req.url);
        const isDashboard = url.searchParams.get("dashboard");

        const newsCollection = db.collection("news");

        let news;

        if (isDashboard === "true") {
            // Get latest 5 news for dashboard
            news = await newsCollection
                .find({})
                .sort({ createdAt: 1 }) // assuming `date` is sortable
                .limit(5)
                .toArray();
        } else {
            // Get all news for main page
            news = await newsCollection
                .find({})
                .sort({ createdAt: 1 })
                .toArray();
        }

        return NextResponse.json({
            success: true,
            data: news,
        });
    } catch (error) {
        console.error("Error fetching news:", error);
        return NextResponse.json(
            { success: false, message: "Failed to fetch news", error },
            { status: 500 }
        );
    }
}

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

        const { coverImage, date, category, heading, content, visibility } = body;

        // Insert with timestamp
        await db.collection("news").insertOne({
            coverImage,
            date,
            category,
            heading,
            content,
            visibility,
            createdAt: new Date(), // timestamp
        });

        return NextResponse.json({
            success: true,
            message: "News Created",
        });
    } catch (error) {
        console.error("Error inserting news:", error);
        return NextResponse.json(
            { success: false, message: "Something went wrong", error },
            { status: 500 }
        );
    }
}

// DELETE METHOD
export async function DELETE(req) {
    try {
        const url = new URL(req.url);
        const id = url.searchParams.get("id");

        if (!id) {
            return NextResponse.json(
                { success: false, message: "Missing news ID" },
                { status: 400 }
            );
        }

        const client = await clientPromise;
        const db = client.db("Takmeel");

        const result = await db.collection("news").deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
            return NextResponse.json(
                { success: false, message: "News not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "News deleted",
        });
    } catch (error) {
        console.error("Error deleting news:", error);
        return NextResponse.json(
            { success: false, message: "Failed to delete news", error },
            { status: 500 }
        );
    }
}

// PUT METHOD (EDIT)
export async function PUT(req) {
    try {
        const body = await req.json();
        const { id, coverImage, date, category, heading, content, visibility } = body;

        if (!id) {
            return NextResponse.json(
                { success: false, message: "Missing news ID" },
                { status: 400 }
            );
        }

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