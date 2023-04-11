import { Route, Routes } from "react-router-dom";
/* import { AppShell, Box, Button, Header } from "@mantine/core"; */
import "./App.css";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import OutletComponent from "./components/OutletComponent";
import UpdatePage from "./pages/UpdatePage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />

        <Route path="/" element={<OutletComponent />}>
          <Route path="/" element={<Home />} />
          <Route path="/update/:userId" element={<UpdatePage />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile>
                  <UpdatePage />
                </Profile>
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
