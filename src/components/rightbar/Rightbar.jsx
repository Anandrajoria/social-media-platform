import "./rightbar.css";
import { Users } from "../../DummyData";
import Online from "../online/Online";
function Rightbar({ profile }) {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="/accets/gift.webp" className="BirthdayImg" alt="" />
          <span className="birthdayText">
            <b>gal gadot</b> and <b>3 other friends</b> have birthday today
          </span>
        </div>

        <img className="rightBarAd" src="/accets/add.jpg" alt="" />
        <h4 className="rightBarTitle">online friends</h4>
        <ul className="rightBarFriendList">
          {Users.map((u) => {
            return <Online key={Users.id} user={u} />;
          })}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightBarTitle">user information title</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City:</span>
            <span className="rightBarInfoValue">Jaipur</span>
          </div>

          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From:</span>
            <span className="rightBarInfoValue">New York</span>
          </div>

          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Relationship:</span>
            <span className="rightBarInfoValue">Single</span>
          </div>

        </div>
        <h4 className="rightBarTitle">User Friends</h4>
        <div className="rightBarFollowings">
          <div className="rightBarFollowing">
            <img src="/accets/profile_picture/1.jpg" className="rightBarFollowingImg" alt="" />
            <span className="rightBarFollowingName">john</span>
          </div>

          <div className="rightBarFollowing">
            <img src="/accets/profile_picture/2.jpg" className="rightBarFollowingImg" alt="" />
            <span className="rightBarFollowingName">john</span>
          </div>

          <div className="rightBarFollowing">
            <img src="/accets/profile_picture/4.jpg" className="rightBarFollowingImg" alt="" />
            <span className="rightBarFollowingName">john</span>
          </div>

          <div className="rightBarFollowing">
            <img src="/accets/profile_picture/4.jpg" className="rightBarFollowingImg" alt="" />
            <span className="rightBarFollowingName">john</span>
          </div>

          <div className="rightBarFollowing">
            <img src="/accets/profile_picture/4.jpg" className="rightBarFollowingImg" alt="" />
            <span className="rightBarFollowingName">john</span>
          </div>

          <div className="rightBarFollowing">
            <img src="/accets/profile_picture/6.jpg" className="rightBarFollowingImg" alt="" />
            <span className="rightBarFollowingName">john</span>
          </div>

          <div className="rightBarFollowing">
            <img src="/accets/profile_picture/5.jpg" className="rightBarFollowingImg" alt="" />
            <span className="rightBarFollowingName">john</span>
          </div>

          <div className="rightBarFollowing">
            <img src="/accets/profile_picture/7.jpg" className="rightBarFollowingImg" alt="" />
            <span className="rightBarFollowingName">john</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="rightBar">
        <div className="rightBarWrapper">
          
          {profile?<ProfileRightBar/>:<HomeRightBar/>}
        </div>
      </div>
    </>
  );
}

export default Rightbar;
