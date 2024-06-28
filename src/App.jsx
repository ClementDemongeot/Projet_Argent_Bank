import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Layout/header/header";
import Home from "./Pages/home/home";
import SignIn from "./Pages/signIn/signIn";
import ProfileUser from "./Pages/profileUser/profileUser";
import Footer from "./components/Layout/footer/footer";
import { useSelector } from "react-redux";
import { base, profileUser, signIn } from "./config/routes";

function App() {
  const isConnected = useSelector((state) => state.auth.isConnected);
  return (
    <>
      <Header />
      <Routes>
        <Route path={base} element={<Home />} />
        <Route path={signIn} element={<SignIn />} />
        <Route
          path={profileUser}
          element={isConnected ? <ProfileUser /> : <Navigate to={signIn} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
