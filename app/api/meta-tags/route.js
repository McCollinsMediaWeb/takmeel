import { NextResponse } from "next/server";
import clientPromise from "@/lib/db";
import { ObjectId } from "mongodb";

export async function GET(req) {
    try {
        const client = await clientPromise;
        const db = client.db("Takmeel");
        const metaTagsCollection = db.collection("meta-tags");

        const allMetaTags = await metaTagsCollection.find({}).sort({ createdAt: -1 }).toArray();

        return NextResponse.json({
            success: true,
            data: allMetaTags,
        });
    } catch (error) {
        console.error("Error fetching Meta Tags:", error);
        return NextResponse.json(
            { success: false, message: "Failed to fetch Meta Tags", error },
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

        console.log('Body', body)

        const { metaPageUrl, metaContent } = body;

        // Insert with timestamp
        await db.collection("meta-tags").insertOne({
            metaPageUrl,
            metaContent,
            createdAt: new Date(),
        });

        return NextResponse.json({
            success: true,
            message: "Meta Tag Created",
        });
    } catch (error) {
        console.error("Error inserting Meta Tag:", error);
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
                { success: false, message: "Missing Meta Tag ID" },
                { status: 400 }
            );
        }

        const client = await clientPromise;
        const db = client.db("Takmeel");

        const result = await db.collection("meta-tags").deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
            return NextResponse.json(
                { success: false, message: "Meta Tag not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Meta Tag deleted",
        });
    } catch (error) {
        console.error("Error deleting Meta Tag:", error);
        return NextResponse.json(
            { success: false, message: "Failed to delete Meta Tag", error },
            { status: 500 }
        );
    }
}

// PUT METHOD
export async function PUT(req) {
    try {

        const url = new URL(req.url);
        const id = url.searchParams.get("id");

        if (!id) {
            return NextResponse.json(
                { success: false, message: "Missing Meta tag ID" },
                { status: 400 }
            );
        }

        const body = await req.json();
        const { metaPageUrl, metaContent } = body;

        const client = await clientPromise;
        const db = client.db("Takmeel");

        const result = await db.collection("meta-tags").updateOne(
            { _id: new ObjectId(id) },
            {
                $set: {
                    metaPageUrl, metaContent
                },
            }
        );

        if (result.matchedCount === 0) {
            return NextResponse.json(
                { success: false, message: "Meta tag not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Meta tag updated",
        });
    } catch (error) {
        console.error("Error updating meta tag:", error);
        return NextResponse.json(
            { success: false, message: "Failed to update meta tag", error },
            { status: 500 }
        );
    }
}