import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from '../../DummyData'
function Post({post}) {
  const user=Users.filter(u=>u.id)
  console.log(user);
  return (
    <>
      <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
                <img src={Users.filter((u)=>u.id === post.userId)[0].profilePicture} className="postProfileImg" alt="" />
                <span className="postUserName">{Users.filter((u)=>u.id === post.userId)[0].Username}</span>
                <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
            <MoreVertIcon/>
            </div>
          </div>

          <div className="postCenter">
            <span className="postText">{post?.description}</span>
            <img src={post.photo} alt="" className="postImg"/>
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
                <img className="likeIcon" src="/accets/like.webp" alt="" />
                <img className="likeIcon" src="/accets/heart.webp" alt="" />
                <span className="postLikeCounter">{post.like} people like it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">{post.comments} comments</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
