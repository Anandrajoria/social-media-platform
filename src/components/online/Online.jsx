import './online.css'
function Online({users}) {
  return (
    <>
      <li className="rightBarFriend">
        <div className="rightBarProfileImgContainer">
          <img
            className="rightBarProfileImg"
            src="/accets/profile_picture/4.jpg"
            alt=""
          />
          <span className="rightBarOnline"></span>
        </div>
        <span className="rightBarUserName">margret</span>
      </li>
    </>
  );
}

export default Online;
