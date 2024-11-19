import './feed.css'
import Share from '../share/Share'
import Post from '../posts/Post'
function Feed() {
  return (
    <div className='feedBar'>
      <div className="feedWrapper">
        <Share/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  )
}

export default Feed