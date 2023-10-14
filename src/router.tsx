import { createBrowserRouter } from "react-router-dom";
import { Main } from "./pages/main/main";
import { Movie } from "./pages/movie/movie";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
  },
]);
