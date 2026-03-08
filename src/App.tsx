import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import { Home } from "./pages/Home";
import { CharCard } from "./pages/CharCard";
import { Planets } from "./pages/Planets";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CharId } from "./components/UI/CharId";
import { PlanetId } from "./components/UI/PlanetId";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/planets", element: <Planets /> },
      { path: "/planets/:id", element: <PlanetId /> },
      { path: "/characters", element: <CharCard /> },
      { path: "/characters/:id", element: <CharId /> },
    ],
  },
]);

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;

