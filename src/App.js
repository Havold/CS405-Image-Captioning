import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Denoising from "./pages/Denoising/Denoising";
import Sharpening from "./pages/Sharpening/Sharpening";
import EdgeDetectors from "./pages/EdgeDetectors/EdgeDetectors";
import './styles.scss'

function App() {
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
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
