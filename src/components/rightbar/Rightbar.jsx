import "./rightbar.css";
function Rightbar() {
  return (
    <>
      <div className='rightBar'>
        <div className="rightBarWrapper">
          <div className="birthdayContainer">
            <img src="/accets/gift.webp" className="BirthdayImg" alt="" />
            <span className="birthdayText"><b>gal gadot</b> and <b>3 other friends</b> have birthday today</span>
          </div>
        </div>
        <img className='rightBarImg' src="/accets/add.jpg" alt="" />
        <h4 className="rightbarTitle">online friends</h4>
        <ul className="rightBarFriendList">
          <li className="rightBarFriend">
            <div className="rightBarProfileImgContainer">
              <img  className='rightBarProfileImg' src="" alt="" />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Rightbar;
