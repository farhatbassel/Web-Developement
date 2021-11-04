import './topbar.scss'
import { Language, NotificationsNone, Settings } from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <section className="topLeft">
                    <span className="logo">Admin Page</span>
                </section>
                <section className="topRight">
                    <div className="topbarIcons">
                        <div className="topbarIconContainer">
                            <NotificationsNone lassName='topbarIcon' />
                            <span className="topIconBadge">2</span>
                        </div>
                        <div className="topbarIconContainer">
                            <Language className='topbarIcon' />
                            <span className="topIconBadge">2</span>
                        </div>
                        <div className="topbarIconContainer">
                            <Settings className='topbarIcon' />
                        </div>
                    </div>
                    <img src='./1.jpeg' className='topAvatar' alt='Admin Profile' />
                </section>
            </div>
        </div>
    )
}
