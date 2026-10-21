import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import Compare from "./pages/Compare";
import About from "./pages/About";
import Layout from "./components/Layout";
import Repository from "./pages/Repository";
 
export default function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
      <Route path="/" element={<HomePage />} />
      <Route path="/compare" element={<Compare />} />
      <Route path="/about" element={<About/>} />
      <Route path='/repository/:owner/:repo' element={<Repository/>}/>
      </Route>
    </Routes>
  );
}