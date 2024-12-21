import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "./styles.scss";
import ImageCaptioning from "./pages/ImageCaptioning/ImageCaptioning";
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
          path: "/image-captioning",
          element: <ImageCaptioning />,
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
