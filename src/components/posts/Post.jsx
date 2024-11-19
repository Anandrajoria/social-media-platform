import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
function Post() {
  return (
    <>
      <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
                <img src="/accets/profile_picture/9.jpg" className="postProfileImg" alt="" />
                <span className="postUserName">shubhi</span>
                <span className="postDate">5 mins ago</span>
            </div>
            <div className="postTopRight">
            <MoreVertIcon/>
            </div>
          </div>

          <div className="postCenter">
            <span className="postText">hey! it is my first post:)</span>
            <img src="/accets/posts/1.jpg" alt="" className="postImg"/>
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
                <img className="likeIcon" src="/accets/like.webp" alt="" />
                <img className="likeIcon" src="/accets/heart.webp" alt="" />
                <span className="postLikeCounter">32 people like it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">9 comments</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
