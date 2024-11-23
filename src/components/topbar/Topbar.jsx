import { useState } from "react";
import "./topbar.css";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";

function Topbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="topbarContainer">
      {/* Left Section */}
      <div className="topbarLeft">
        <span className="logo">SocialMedia</span>
      </div>

      {/* Center Section */}
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input
            type="text"
            className="SearchInput"
            placeholder="Search for friend, post or videos"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarlink"><Link className="topBarlinkHome" to="/">Homepage</Link></span>
          <span className="topbarlink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ChatIcon />
            <span className="topbarIconBadge">3</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsIcon />
            <span className="topbarIconBadge">5</span>
          </div>
        </div>

        {/* Profile Picture and Dropdown */}
        <div className="profileSection">
          <img
            src="/accets/profile_picture/1.jpg"
            alt="Profile"
            className="topbarImg"
            onClick={toggleDropdown}
          />
          {dropdownVisible && (
            <div className="dropdownMenu">
              <ul>
                
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Topbar;
