import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="/accets/posts/2.jpg"
                className="profileCoverImg"
                alt=""
              />
              <img
                src="/accets/profile_picture/2.jpg"
                className="profileUserImg"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Aditya</h4>
                <span className="profileInfoDesc">i know i can do it all by myself</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
