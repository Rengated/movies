import { createBrowserRouter, createHashRouter } from "react-router-dom";
import { Main } from "./pages/main/main";
import { Movie } from "./pages/movie/movie";

export const router = createHashRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
  },
]);
