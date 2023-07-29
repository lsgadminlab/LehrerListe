import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/templates/Layout";
import Home from "./pages/Home";
import Open from "./pages/Open";
import Closed from "./pages/Closed";
import Ticket from "./pages/Ticket";

export const Router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home></Home>} />
      <Route path="/open" element={<Open></Open>} />
      <Route path="/closed" element={<Closed></Closed>} />
      <Route path="/ticket/:id" element={<Ticket></Ticket>} />
    </Route>,
  ])
);
