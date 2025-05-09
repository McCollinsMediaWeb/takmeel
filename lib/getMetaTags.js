import clientPromise from "./db";

export async function getMetaTags(pathname) {
    const client = await clientPromise;
    const db = client.db("Takmeel");

    let metaTags = await db.collection("meta-tags").find({ metaPageUrl: pathname }).toArray();
    console.log("mettag", metaTags)
    return JSON.parse(JSON.stringify(metaTags));
};

// lib/metadata.ts
export async function fetchPageMetadata(slug) {
    const res = await fetch(`/api/meta-tags/pages?slug=${slug}`, {
        next: { revalidate: 60 }, // optional: ISR
    });

    if (!res.ok) throw new Error('Failed to fetch metadata');
    return res.json();
}
