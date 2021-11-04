import './widgetLrg.scss'

export default function WidgetLrg() {

    const Button = ({ type }) => {
        return <button className={'widgetLrgButton ' + type}>{type}</button>
    }
    return (
        <div className='widgetLrg'>
            <h3 className="widgetLrgTitle">Latest Transactions</h3>
            <table className="widgetLrgTable">
                <tr className="widgetLrgTr">
                    <th className="widgetLrgTh">Customer</th>
                    <th className="widgetLrgTh">Date</th>
                    <th className="widgetLrgTh">Amount</th>
                    <th className="widgetLrgTh">Status</th>
                </tr>
                <tr className="widgetLrgTr">
                    <td className="widgetLrgUser">
                        <img src="./1.jpeg" alt="" className="widgetLrgImg" />
                        <span className="widgetLrgName">Susan Carol</span>
                    </td>
                    <td className="widgetLrgDate">2 Jun 2021</td>
                    <td className="widgetLrgAmount">$122.00</td>
                    <td className="widgetLrgStatus"><Button type='Approved' /></td>
                </tr>
                <tr className="widgetLrgTr">
                    <td className="widgetLrgUser">
                        <img src="./1.jpeg" alt="" className="widgetLrgImg" />
                        <span className="widgetLrgName">Susan Carol</span>
                    </td>
                    <td className="widgetLrgDate">2 Jun 2021</td>
                    <td className="widgetLrgAmount">$122.00</td>
                    <td className="widgetLrgStatus"><Button type='Declined' /></td>
                </tr>
                <tr className="widgetLrgTr">
                    <td className="widgetLrgUser">
                        <img src="./1.jpeg" alt="" className="widgetLrgImg" />
                        <span className="widgetLrgName">Susan Carol</span>
                    </td>
                    <td className="widgetLrgDate">2 Jun 2021</td>
                    <td className="widgetLrgAmount">$122.00</td>
                    <td className="widgetLrgStatus"><Button type='Pending' /></td>
                </tr>
            </table>
        </div>
    )
}
