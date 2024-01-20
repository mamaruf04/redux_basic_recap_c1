import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Login from "../component/loginForm/Login";
import Register from "../component/loginForm/Register";
import NotFound from "../component/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
