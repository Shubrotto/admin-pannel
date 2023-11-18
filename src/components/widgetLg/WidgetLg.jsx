import "./widgetLg.css";
import Img from "../../assets/images/avatar.jpg";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widget_lg_button " + type}>{type}</button>;
  };
  return (
    <div className="widget_lg">
      <h3 className="widget_lg_title">Latest transactions</h3>
      <table className="widget_lg_table">
        <tr className="widget_lg_tr">
          <th className="widget_lg_th">Customer</th>
          <th className="widget_lg_th">Date</th>
          <th className="widget_lg_th">Amount</th>
          <th className="widget_lg_th">Status</th>
        </tr>
        <tr className="widget_lg_tr">
          <td className="widget_lg_user">
            <img src={Img} alt="" className="widget_lg_img" />
            <span className="widget_lg_name">Nayon Kumar</span>
          </td>
          <td className="widget_lg_date">15 Nov 2023</td>
          <td className="widget_lg_amount">80.00$</td>
          <td className="widget_lg_status">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widget_lg_tr">
          <td className="widget_lg_user">
            <img src={Img} alt="" className="widget_lg_img" />
            <span className="widget_lg_name">Nayon Kumar</span>
          </td>
          <td className="widget_lg_date">15 Nov 2023</td>
          <td className="widget_lg_amount">80.00$</td>
          <td className="widget_lg_status">
            <Button type="Decline" />
          </td>
        </tr>
        <tr className="widget_lg_tr">
          <td className="widget_lg_user">
            <img src={Img} alt="" className="widget_lg_img" />
            <span className="widget_lg_name">Nayon Kumar</span>
          </td>
          <td className="widget_lg_date">15 Nov 2023</td>
          <td className="widget_lg_amount">80.00$</td>
          <td className="widget_lg_status">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widget_lg_tr">
          <td className="widget_lg_user">
            <img src={Img} alt="" className="widget_lg_img" />
            <span className="widget_lg_name">Nayon Kumar</span>
          </td>
          <td className="widget_lg_date">15 Nov 2023</td>
          <td className="widget_lg_amount">80.00$</td>
          <td className="widget_lg_status">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
