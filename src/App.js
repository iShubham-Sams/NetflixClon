import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./component/Main";
import { AuthContextProvider } from "./component/context/Authcontex";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import ProtectedRoute from "./component/ProtectedRoute";

function App() {
  return (
    <>
      <div>
        <AuthContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/main" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthContextProvider>
      </div>
    </>
  );
}

export default App;
