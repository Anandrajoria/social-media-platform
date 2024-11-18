import './share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="/accets/profile_picture/1.jpg" alt="" className='shareProfileImg'/>
                <input type="text" className='shareInput' placeholder="what's in your mind" />
            </div>
            <hr  className='shareHr'/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMediaIcon className='shareIcon'/>
                        <span className='shareOptionText'>photo or vodeo</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Share