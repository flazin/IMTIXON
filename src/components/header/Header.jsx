import { useContext } from "react";
import { ThemeContext } from "../../context/context";
import sunIcon from "../../assets/mobile/sunIcon.svg";
import moonIcon from "../../assets/mobile/MoonIcon.svg";
import Filter from "../Filter/Filter";
import { Link } from "react-router-dom";

export default function Header() {
  const { handleTheme, jobId } = useContext(ThemeContext);

  return (
    <header>
      <div className="brand">
        <Link className="brand-name" to="/devjobs-web-app/">
          devjobs
        </Link>
        <div className="switch-container flex gap-4">
          <img src={sunIcon} alt="light theme" width={"20px"} height={"20px"} />
          <div className="change-theme">
            <div className="switch" onClick={handleTheme}>
              <span className="slider"></span>
            </div>
          </div>
          <img src={moonIcon} alt="dark theme" width={"20px"} height={"20px"} />
        </div>
        {!jobId && <Filter />}
      </div>
    </header>
  );
}
