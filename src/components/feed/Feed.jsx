import './feed.css'
import Share from '../share/Share'
import Post from '../posts/Post'
import {posts} from "../../DummyData"
function Feed() {
  
  return (
    <div className='feedBar'>
      <div className="feedWrapper">
        <Share/>

        {posts.map((p)=>{
          return <Post key={p.id} post={p}/>
        })}
        
        
      </div>
    </div>
  )
}

export default Feed