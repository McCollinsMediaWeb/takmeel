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