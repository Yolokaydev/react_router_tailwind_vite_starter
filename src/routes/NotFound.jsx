import { useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();

  // Handle cases where error is undefined or doesn't have a message
  const errorMessage = error?.message || "Page not found.";

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">
          Uh oh, something went wrong 😩
        </h1>
        <pre className="mb-4">{errorMessage}</pre>
        <button
          onClick={() => (window.location.href = "/")}
          className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-700"
        >
          Click here to reload the app
        </button>
      </div>
    </div>
  );
}
