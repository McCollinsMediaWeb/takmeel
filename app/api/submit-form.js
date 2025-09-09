// pages/api/submit-form.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const payload = req.body;

    // Basic sanity check
    if (!payload || typeof payload !== "object") {
      return res.status(400).json({ error: "Invalid payload" });
    }

    const ZOHO_FLOW_WEBHOOK = process.env.ZOHO_FLOW_WEBHOOK;
    if (!ZOHO_FLOW_WEBHOOK) {
      console.error("ZOHO_FLOW_WEBHOOK env var not set");
      return res.status(500).json({ error: "Server not configured" });
    }

    // Forward to Zoho Flow
    const flowResp = await fetch(ZOHO_FLOW_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const text = await flowResp.text();

    // Return Flow's response (or error)
    if (!flowResp.ok) {
      console.error("Zoho Flow returned error:", flowResp.status, text);
      return res.status(flowResp.status).json({ error: text || "Zoho Flow error" });
    }

    console.log("Forwarded to Zoho Flow, status:", flowResp.status, text);
    return res.status(200).json({ success: true, result: text });
  } catch (err) {
    console.error("Error in /api/submit-form:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

