import './share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LocationOnIcon from '@mui/icons-material/LocationOn';

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
                        <PermMediaIcon htmlColor='tomato' className='shareIcon'/>
                        <span className='shareOptionText'>photo or vodeo</span>
                    </div>

                    <div className="shareOption">
                        <LabelIcon htmlColor='blue' className='shareIcon'/>
                        <span className='shareOptionText'>Tag</span>
                    </div>

                    <div className="shareOption">
                        <LocationOnIcon htmlColor='green' className='shareIcon'/>
                        <span className='shareOptionText'>Location</span>
                    </div>

                    <div className="shareOption">
                        <EmojiEmotionsIcon htmlColor='goldenrod' className='shareIcon'/>
                        <span className='shareOptionText'>Feeelings</span>
                    </div>

                    
                </div>
                <button className='sharebutton'>Share</button>

            </div>
        </div>
    </div>
  )
}

export default Share