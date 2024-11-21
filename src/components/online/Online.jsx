import './online.css'
function Online({user}) {
  return (
    <>
      <li className="rightBarFriend">
        <div className="rightBarProfileImgContainer">
          <img
            className="rightBarProfileImg"
            src={user.profilePicture}
            alt=""
          />
          <span className="rightBarOnline"></span>
        </div>
        <span className="rightBarUserName">{user.Username}</span>
      </li>
    </>
  );
}

export default Online;
