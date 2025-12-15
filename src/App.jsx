import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/adduser" element={<AddUser />}></Route>
          <Route path="/edituser/:id" element={<EditUser />}></Route>
          <Route path="/viewuser/:id" element={<ViewUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
