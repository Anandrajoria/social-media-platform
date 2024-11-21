function CloseFriend({user}) {
  return (
    <>
      <li className="sideBarFriend">
        <img
        src={user.profilePicture}
          alt=""
          className="sideBarFriendImg"
        />
        <span className="sideBarFriendName">{user.Username}</span>
      </li>
    </>
  );
}

export default CloseFriend;
