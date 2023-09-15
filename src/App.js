import "./App.css";
import Footer from "./component/Footer/Footer";
import Nav from "./component/Header/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./component/SignUp/SignUp";
import PrivateComponent from "./component/PrivateComponent/PrivateComponent";
import Login from "./component/Login/Login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<h1>Product Listing Component </h1>} />
            <Route path="/add" element={<h1> Add Product Component </h1>} />
            <Route
              path="/update"
              element={<h1>update Product Component </h1>}
            />
            <Route path="/logout" element={<h1> Logout Component </h1>} />
            <Route path="/profile" element={<h1>Its ME</h1>} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
