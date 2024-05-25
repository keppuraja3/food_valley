import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Menu from "./Menu";
import Gallery from "./Gallery";
import About from "./About";
import Login from "./Login";
import Register from "./Register";
import Forget from "./Forget";
import Footer from "./Footer";
import Users from "./Admin/Users";
import Settings from "./Admin/Settings";
import MenuAdmin from "./Admin/Menu";
import Management from "./Admin/Management";
import Sales from "./Admin/Sales";
import Report from "./Admin/Report";
import "./assets/css/style.css";
import Admin from "./Admin/Admin";
import AdminHeader from "./Admin/AdminHeader";
import Profile from "./Admin/Profile";
import FoodManagement from "./Admin/FoodManagement";

function App() {
  const [count, setCount] = useState(0);
  const [screenLoading, setScreenLoading] = useState(false);

  // window.addEventListener("load", preLoader);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {/*  Page pre loader content start */}
      {screenLoading ? (
        <div id="loading" className=" position-absolute top-0 p-0 m-0">
          <div className="w-100 h-100 d-flex justify-content-center align-items-center  ">
            <img src="/img/dish.png" alt="loading" />
          </div>
        </div>
      ) : (
        <></>
      )}

      {/* Page pre loader content end */}

      <Routes>
        <Route path="" element={<Header />}>
          <Route path="" element={<Home />}></Route>
          <Route path="menu" element={<Menu />}></Route>
          <Route path="gallery" element={<Gallery />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="forget" element={<Forget />}></Route>
        </Route>
        <Route path="admin" element={<Admin />}>
          <Route path="menu" element={<MenuAdmin />} />
          <Route path="profile" element={<Profile />} />
          <Route path="management" element={<Management />} />
          <Route path="sales" element={<Sales />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="report" element={<Report />} />
          <Route path="foods" element={<FoodManagement />} />
        </Route>
        {/* <Route path="" element={<Footer />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
