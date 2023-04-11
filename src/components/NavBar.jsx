import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Image } from "@mantine/core";
import { SessionContext } from "../contexts/SessionContext";

function NavBar() {
  const { isAuthenticated, setIsAuthenticated, setToken, setUser } =
    useContext(SessionContext);

  const handleLogout = () => {
    localStorage.removeItem("bearer");
    setIsAuthenticated(false);
    setToken(null);
    setUser(null);
  };

  return (
    <>
      <section className="navbar-section-outer">
        <div className="navbar-section-inner">
          <div>
            <br></br>
            <NavLink className="navbar-comp-style" to="/">
              home
            </NavLink>

          </div>

          <Image
            width={130}
            className="style-logo"
            src="../../images/logo-purple.png"
            alt="logo empowered"
          ></Image>

          <div className="navBar-right">
            <br></br>


            {isAuthenticated ? (
              <>

                <NavLink className="navbar-comp-style" to="/profile">
                  profile
                </NavLink>

                <NavLink
                  className="navbar-comp-style"
                  to="/"
                  onClick={handleLogout}
                >
                  logout
                </NavLink>
              </>
            ) : (
              <>
                <NavLink className="navbar-comp-style" to="/signup">
                  sign up
                </NavLink>
                <NavLink className="navbar-comp-style" to="/login">
                  login
                </NavLink>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default NavBar;
