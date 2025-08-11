import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Server, Rocket, CheckCircle, AlertTriangle, NotebookPen, Code, Globe, Cloud } from "lucide-react";

interface ApiResponse {
  message: string;
  timestamp: string;
  status: string;
}

export default function Home() {
  const [shouldFetch, setShouldFetch] = useState(false);

  const { data, isLoading, error, refetch } = useQuery<ApiResponse>({
    queryKey: ["/api/hello"],
    enabled: shouldFetch,
  });

  const handleFetchData = () => {
    setShouldFetch(true);
    refetch();
  };

  const resetStates = () => {
    setShouldFetch(false);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 font-[Inter]">
      <div className="max-w-2xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
              <Server className="text-white text-xl" size={24} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Vercel Fullstack Demo</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-lg mx-auto">
            A simple demonstration of full-stack deployment on Vercel with Node.js API and interactive frontend.
          </p>
        </div>

        {/* Main Card */}
        <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          
          {/* Card Header */}
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-6 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 flex items-center">
              <Rocket className="text-blue-500 mr-3" size={24} />
              API Integration Test
            </h2>
            <p className="text-gray-600 mt-2">Click the button below to fetch data from the backend API endpoint.</p>
          </CardHeader>

          {/* Card Content */}
          <CardContent className="px-8 py-8">
            <div className="space-y-6">
              
              {/* Action Button */}
              <div className="text-center">
                <Button 
                  onClick={handleFetchData}
                  disabled={isLoading}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-200 shadow-lg hover:shadow-xl inline-flex items-center space-x-3 h-auto"
                  data-testid="button-fetch-api-data"
                >
                  <NotebookPen size={16} />
                  <span>Fetch API Data</span>
                </Button>
              </div>

              {/* Loading State */}
              {isLoading && (
                <div className="text-center py-8" data-testid="loading-state">
                  <div className="inline-flex items-center space-x-3 text-blue-500">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
                    <span className="font-medium">Fetching data from API...</span>
                  </div>
                </div>
              )}

              {/* API Response Display */}
              {data && !isLoading && (
                <div data-testid="response-container">
                  <div className="bg-gray-50 rounded-xl p-6 border-2 border-dashed border-gray-200">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <CheckCircle className="text-emerald-500" size={20} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-gray-900 mb-2">API Response</h3>
                        <div className="bg-white rounded-lg p-4 border border-gray-200 font-mono text-sm">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-emerald-500 font-medium">200 OK</span>
                            <span className="text-gray-400">•</span>
                            <span className="text-gray-500">GET /api/hello</span>
                          </div>
                          <pre className="text-gray-800 whitespace-pre-wrap" data-testid="response-data">
{JSON.stringify(data, null, 2)}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Error State */}
              {error && !isLoading && (
                <div data-testid="error-container">
                  <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                          <AlertTriangle className="text-red-500" size={20} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-red-900 mb-2">Error Occurred</h3>
                        <p className="text-red-700" data-testid="error-message">
                          {error instanceof Error ? error.message : "Failed to fetch data from the API. Please check your connection and try again."}
                        </p>
                        <Button 
                          onClick={resetStates}
                          variant="outline"
                          className="mt-3 text-red-700 border-red-300 hover:bg-red-50"
                          data-testid="button-retry"
                        >
                          Try Again
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </CardContent>

          {/* Card Footer */}
          <div className="bg-gray-50 px-8 py-4 border-t border-gray-200">
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-4">
                <span className="flex items-center space-x-1">
                  <Server className="text-gray-400" size={14} />
                  <span>Backend: Node.js API</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Globe className="text-gray-400" size={14} />
                  <span>Frontend: React</span>
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <Cloud className="text-gray-400" size={14} />
                <span>Deployed on Vercel</span>
              </div>
            </div>
          </div>

        </Card>

        {/* Technical Details */}
        <Card className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Code className="text-blue-500 mr-2" size={20} />
              Technical Implementation
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Project Structure</h4>
                <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm text-gray-700">
                  <div>📁 client/</div>
                  <div>&nbsp;&nbsp;📄 src/pages/home.tsx</div>
                  <div>&nbsp;&nbsp;📄 src/App.tsx</div>
                  <div>📁 server/</div>
                  <div>&nbsp;&nbsp;📄 routes.ts</div>
                  <div>📄 package.json</div>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">API Endpoint</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs font-medium">GET</span>
                    <span className="font-mono text-sm text-gray-700">/api/hello</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Returns a JSON response with a greeting message from the backend.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
