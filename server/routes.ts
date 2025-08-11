import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint that returns a greeting message
  app.get("/api/hello", (req, res) => {
    const response = {
      message: "Hello from Vercel Backend!",
      timestamp: new Date().toISOString(),
      status: "success"
    };
    
    res.json(response);
  });

  const httpServer = createServer(app);

  return httpServer;
}
