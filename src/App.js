import * as React from "react";
import { createBrowserRouter,  RouterProvider,} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>
    },
  ]);
  return (
    <div className="App">
    <RouterProvider router={router} />
    
     
    </div>
  );
}

export default App;
