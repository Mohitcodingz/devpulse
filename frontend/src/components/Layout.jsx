// import HomePage from "../pages/HomePage";
import Navbar from "./Navbar";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <Navbar />
      {/* <HomePage/> */}
      <Outlet />    
    </>
  );
}