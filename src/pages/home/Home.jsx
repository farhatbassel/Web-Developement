import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './home.scss'
import { data } from '../../data'
import WidgetSml from '../../components/widgetSml/WidgetSml'
import WidgetLrg from '../../components/widgetLrg/WidgetLrg'

export default function Home() {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={data} title='User Analytics' grid dataKey='Active User' />
            <div className="homeWidgets">
                <WidgetSml />
                <WidgetLrg />
            </div>
        </div>
    )
}
