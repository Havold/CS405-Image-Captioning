import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Denoising from "./pages/Denoising/Denoising";
import Sharpening from "./pages/Sharpening/Sharpening";
import EdgeDetectors from "./pages/EdgeDetectors/EdgeDetectors";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "./styles.scss";

function App() {
  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <div className="layout">
        <NavBar />
        <Outlet />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/denoising",
          element: <Denoising />,
        },
        {
          path: "/sharpening",
          element: <Sharpening />,
        },
        {
          path: "/edge-detectors",
          element: <EdgeDetectors />,
        },
      ],
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
