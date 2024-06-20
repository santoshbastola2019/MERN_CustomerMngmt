import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import PostUser from "./components/postUser/postUser";
import UpdateUser from "./components/updateUser/updateUser";
import Nomatch from "./components/nomatch/nomatch";
import Header from "./components/header/header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Dashboard></Dashboard>}></Route>
          <Route path="/user" element={<PostUser></PostUser>}></Route>
          <Route path="/user/:id" element={<UpdateUser></UpdateUser>}></Route>
          <Route path="*" element={<Nomatch></Nomatch>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
