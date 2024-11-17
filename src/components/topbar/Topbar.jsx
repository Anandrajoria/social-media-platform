import './topbar.css'
// import {SearchIcon, PersonIcon} from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search'
import ChatIcon from '@mui/icons-material/Chat';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Topbar() {
  return (
    <>
        <div className='topbarContainer'>
        <div className="topbarLeft">
            <span className='logo'>SocialMedia</span>
        </div>

        <div className="topbarCenter">
            <div className='searchbar'>
                <SearchIcon className='searchIcon'
                />
                <input type="text" className="SearchInput" placeholder='search for friend, post or videos' />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className='topbarlink'>Homepage</span>
                <span className='topbarlink'>Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className='topbarIconItem'>
                    <PersonIcon/>
                    <span className='topbarIconBadge'>1</span>
                </div>
                <div className='topbarIconItem'>
                    <ChatIcon/>
                    <span className='topbarIconBadge'>3</span>
                </div>
                <div className='topbarIconItem'>
                    <NotificationsIcon/>
                    <span className='topbarIconBadge'>5</span>
                </div>
            </div>
            <img src="/accets/profile_picture/1.jpg" alt="" className="topbarImg" />
        </div>

        </div>
    </>
  )
}

export default Topbar