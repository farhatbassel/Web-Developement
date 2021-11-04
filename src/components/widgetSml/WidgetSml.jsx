import { Visibility } from '@material-ui/icons'
import './widgetSml.scss'

export default function WidgetSml() {
    return (
        <div className='widgetSml'>
            <span className="widgetSmlTitle">New Members</span>
            <ul className="widgetSmlList">
                <li className='widgetSmlListItem'>
                    <img src="./1.jpeg" className='widgetSmlImage' alt="" />
                    <div className="widgetSmlUser">
                        <span className="widgetSmlUsername">Anna</span>
                        <span className="widgetSmlUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmlButton">
                        <Visibility className='widgetSmlIcon' /> Display
                    </button>
                </li>
                <li className='widgetSmlListItem'>
                    <img src="./1.jpeg" className='widgetSmlImage' alt="" />
                    <div className="widgetSmlUser">
                        <span className="widgetSmlUsername">Anna</span>
                        <span className="widgetSmlUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmlButton">
                        <Visibility className='widgetSmlIcon' /> Display
                    </button>
                </li>
                <li className='widgetSmlListItem'>
                    <img src="./1.jpeg" className='widgetSmlImage' alt="" />
                    <div className="widgetSmlUser">
                        <span className="widgetSmlUsername">Anna</span>
                        <span className="widgetSmlUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmlButton">
                        <Visibility className='widgetSmlIcon' /> Display
                    </button>
                </li>
                <li className='widgetSmlListItem'>
                    <img src="./1.jpeg" className='widgetSmlImage' alt="" />
                    <div className="widgetSmlUser">
                        <span className="widgetSmlUsername">Anna</span>
                        <span className="widgetSmlUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmlButton">
                        <Visibility className='widgetSmlIcon' /> Display
                    </button>
                </li>
                <li className='widgetSmlListItem'>
                    <img src="./1.jpeg" className='widgetSmlImage' alt="" />
                    <div className="widgetSmlUser">
                        <span className="widgetSmlUsername">Anna</span>
                        <span className="widgetSmlUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmlButton">
                        <Visibility className='widgetSmlIcon' /> Display
                    </button>
                </li>
            </ul>
        </div >
    )
}
