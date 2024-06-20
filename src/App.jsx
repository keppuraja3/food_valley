import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Menu from "./Menu";
import Gallery from "./Gallery";
import About from "./About";
import Login from "./Login";
import Order from "./Order";
import Register from "./Register";
import Forget from "./Forget";
import Footer from "./Footer";
import Users from "./Admin/Users";
import Settings from "./Admin/Settings";
import MenuAdmin from "./Admin/Menu";
import Management from "./Admin/Management";
import Sales from "./Admin/Sales";
import Report from "./Admin/Report";
import Admin from "./Admin/Admin";
import AdminHeader from "./Admin/AdminHeader";
import Profile from "./Admin/Profile";
import FoodManagement from "./Admin/FoodManagement";
import PageNotFound from "./PageNotFound";
import "./assets/css/style.css";

function App() {
  const [screenLoading, setScreenLoading] = useState(false);

  // window.addEventListener("load", preLoader);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 2500);
  }, []);
  return (
    <>
      {/*  Page pre loader content start */}
      {screenLoading ? (
        <div id="loading" className=" position-fixed top-0 p-0 m-0">
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
          <Route index element={<Home />}></Route>
          <Route path="menu" element={<Menu />}></Route>
          <Route path="gallery" element={<Gallery />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="order/:id" element={<Order />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="forget" element={<Forget />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Route>
        <Route path="admin" element={<Admin />}>
          <Route path="menu" element={<MenuAdmin />} />
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<Management />} />
          <Route path="sales" element={<Sales />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="report" element={<Report />} />
          <Route path="foods" element={<FoodManagement />} />
          <Route path="*" element={<PageNotFound />}></Route>
        </Route>
        <Route path="*" element={<PageNotFound />}></Route>

        {/* <Route path="" element={<Footer />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
