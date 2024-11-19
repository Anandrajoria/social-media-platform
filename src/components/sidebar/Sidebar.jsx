import "./sidebar.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpIcon from "@mui/icons-material/Help";
import WorkIcon from "@mui/icons-material/Work";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
function Sidebar() {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <RssFeedIcon className="sideBarIcon" />
            <span className="sideBarListItemText">feed</span>
          </li>
          <li className="sideBarListItem">
            <ChatIcon className="sideBarIcon" />
            <span className="sideBarListItemText">Chats</span>
          </li>
          <li className="sideBarListItem">
            <PlayCircleFilledIcon className="sideBarIcon" />
            <span className="sideBarListItemText">Video</span>
          </li>
          <li className="sideBarListItem">
            <GroupIcon className="sideBarIcon" />
            <span className="sideBarListItemText">Groups</span>
          </li>
          <li className="sideBarListItem">
            <BookmarkIcon className="sideBarIcon" />
            <span className="sideBarListItemText">Bookmarks</span>
          </li>
          <li className="sideBarListItem">
            <HelpIcon className="sideBarIcon" />
            <span className="sideBarListItemText">Questions</span>
          </li>
          <li className="sideBarListItem">
            <WorkIcon className="sideBarIcon" />
            <span className="sideBarListItemText">Jobs</span>
          </li>
          <li className="sideBarListItem">
            <EventIcon className="sideBarIcon" />
            <span className="sideBarListItemText">Events</span>
          </li>
          <li className="sideBarListItem">
            <SchoolIcon className="sideBarIcon" />
            <span className="sideBarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sideBarButton">show More</button>
        <hr className="sideBarHr" />
        <ul className="sideBarFriendList">
          <li className="sideBarFriend">
            <img
              src="/accets/Profile_picture/2.jpg"
              alt=""
              className="sideBarFriendImg"
            />
            <span className="sideBarFriendName">Anand</span>
          </li>

          <li className="sideBarFriend">
            <img
              src="/accets/Profile_picture/3.jpg"
              alt=""
              className="sideBarFriendImg"
            />
            <span className="sideBarFriendName">Emma stone</span>
          </li>

          <li className="sideBarFriend">
            <img
              src="/accets/Profile_picture/4.jpg"
              alt=""
              className="sideBarFriendImg"
            />
            <span className="sideBarFriendName">Siya</span>
          </li>

          <li className="sideBarFriend">
            <img
              src="/accets/Profile_picture/5.jpg"
              alt=""
              className="sideBarFriendImg"
            />
            <span className="sideBarFriendName">Shubhi</span>
          </li>

          <li className="sideBarFriend">
            <img
              src="/accets/Profile_picture/6.jpg"
              alt=""
              className="sideBarFriendImg"
            />
            <span className="sideBarFriendName">Jiraya</span>
          </li>

          <li className="sideBarFriend">
            <img
              src="/accets/Profile_picture/7.jpg"
              alt=""
              className="sideBarFriendImg"
            />
            <span className="sideBarFriendName">Devid</span>
          </li>

          <li className="sideBarFriend">
            <img
              src="/accets/Profile_picture/8.jpg"
              alt=""
              className="sideBarFriendImg"
            />
            <span className="sideBarFriendName">Alita</span>
          </li>

          <li className="sideBarFriend">
            <img
              src="/accets/Profile_picture/9.jpg"
              alt=""
              className="sideBarFriendImg"
            />
            <span className="sideBarFriendName">Scarllet</span>
          </li>

          <li className="sideBarFriend">
            <img
              src="/accets/Profile_picture/10.jpg"
              alt=""
              className="sideBarFriendImg"
            />
            <span className="sideBarFriendName">Emma</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;