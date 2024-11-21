import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./routes";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./http/base";

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider
          router={routes}
          future={{
            v7_startTransition: true,
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
