import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Layout/header/header";
import Home from "./Pages/home/home";
import SignIn from "./Pages/signIn/signIn";
import ProfileUser from "./Pages/profileUser/profileUser";
import Footer from "./components/Layout/footer/footer";
import { useSelector } from "react-redux";

function App() {
  const isConnected = useSelector((state) => state.auth.isConnected);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/profile-user"
          element={isConnected ? <ProfileUser /> : <Navigate to="/signin" />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
