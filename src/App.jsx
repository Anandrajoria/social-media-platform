import Home from "./pages/home/home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import ErrorPage from "./pages/Errorpage/ErrorPage";
import { Route, Routes } from "react-router-dom"; // BrowserRouter
import Topbar from "./components/topbar/Topbar";
function App() {
  return (
    <>
      <Topbar />

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/profile" Component={Profile} />
        <Route path="/register" Component={Register} />
        <Route path="*" Component={ErrorPage} />
      </Routes>
    </>
  );
}

export default App;
