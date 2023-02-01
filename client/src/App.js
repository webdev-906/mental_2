import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import "./index.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import NavigationBar from "./components/Nav";
import MyHealth360 from "./pages/MyHealth360"
import Contact from "./pages/Contact"
import Chat from "./pages/Chat";
import AdminChat from "./pages/adminDash";
import AdminNavigationBar from "./components/Navbar";
import { AuthContext } from "./context/authContext";
import { useContext } from "react";
import VisitorNavigationBar from "./components/VisitorNav";
import MentalPage from "./pages/MentalPage";

const Layout = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      { currentUser === 0 ? <VisitorNavigationBar/> : currentUser.id === 4 ? <AdminNavigationBar /> : <NavigationBar />}
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/MyHealth360",
        element: <MyHealth360 />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/chat",
        element: <Chat />
      },
      {
        path:"/admDash",
        element: <AdminChat/>
      },
      {
        path:"/mentAllyForm",
        element: <MentalPage/>
      }
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",  // this is a catch-all route
    element: <h1>404: Page Not Found</h1>,
  },

]);

function App() {
  return (
    <div className="app">
     
        <RouterProvider router={router} />
      
      </div>
    
  );
}

export default App;
