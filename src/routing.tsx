import {createMemoryRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

const router = createMemoryRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<h1>HOME</h1>} />
    </Route>
  )
);

function Routing() {
  return (
    <RouterProvider router={router} />
  );
}

export default Routing;
