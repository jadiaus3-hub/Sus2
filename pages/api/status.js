export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  // Return API status information
  const response = {
    status: "online",
    message: "Node.js API is running successfully on Vercel",
    runtime: "Node.js 18.x",
    timestamp: new Date().toISOString(),
    endpoints: [
      { path: "/api/hello", method: "GET", description: "Returns greeting message" },
      { path: "/api/status", method: "GET", description: "Returns API status" }
    ]
  };

  res.status(200).json(response);
}