// Takmeel/app/api/submit-form/route.js
export async function POST(request) {
  try {
    const payload = await request.json();

    if (!payload || typeof payload !== "object") {
      return new Response(
        JSON.stringify({ error: "Invalid payload" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const ZOHO_FLOW_WEBHOOK = process.env.ZOHO_FLOW_WEBHOOK;
    if (!ZOHO_FLOW_WEBHOOK) {
      console.error("ZOHO_FLOW_WEBHOOK env var not set");
      return new Response(
        JSON.stringify({ error: "Server not configured" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Forward to Zoho Flow
    const flowResp = await fetch(ZOHO_FLOW_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ payload }), // wrap in payload for Zoho Flow
    });

    const text = await flowResp.text();

    if (!flowResp.ok) {
      console.error("Zoho Flow returned error:", flowResp.status, text);
      return new Response(
        JSON.stringify({ error: text || "Zoho Flow error" }),
        { status: flowResp.status, headers: { "Content-Type": "application/json" } }
      );
    }

    console.log("Forwarded to Zoho Flow, status:", flowResp.status, text);
    return new Response(
      JSON.stringify({ success: true, result: text }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Error in /api/submit-form:", err);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
