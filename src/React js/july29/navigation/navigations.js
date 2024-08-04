import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../screens/Main";
import Menu from "../screens/Menu";
import Location from "../screens/location";
import Registrations from "../screens/Registration";
import LoginQ from "../screens/login";

const Navigations = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/menu" element={<Menu />} />
          <Route path="/location" element={<Location />} />
          <Route path="/login" element={<LoginQ />} />
          <Route path="/registration" element={<Registrations />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Navigations;
