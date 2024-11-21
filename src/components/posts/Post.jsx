import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from '../../DummyData'
import { useState } from "react";
function Post({post}) {
  const[like ,setlike] =useState(post.like)
  const [isLiked,setIsLiked]=useState(false)


  const likeHandler=()=>{
    setlike(isLiked?like-1:like+1)
    setIsLiked(!isLiked)
  }
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
                <img className="likeIcon" src="/accets/like.webp" alt="" onClick={likeHandler} />
                <img className="likeIcon" src="/accets/heart.webp" alt="" onClick={likeHandler}/>
                <span className="postLikeCounter">{like} people like it</span>
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
