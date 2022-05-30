import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import AppProvider from "./AppContext";
import { QueryClient, QueryClientProvider } from "react-query";

// This enables HMR
// TODO: check if it affects prod build
// sorry TS
if ((module as unknown as Record<string, unknown>)?.hot) {
  (module as unknown as Record<"hot", { accept: () => void }>)?.hot?.accept();
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <AppProvider>
      <App />
    </AppProvider>
  </QueryClientProvider>,
  document.getElementById("root")
);
