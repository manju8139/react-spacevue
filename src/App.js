import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import Login from './pages/login/Login';
import SpacevueTable from "./components/spacevue/SpacevueTable";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/space",
      element: <SpacevueTable />
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
