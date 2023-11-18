import Chart from "../../components/charts/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSmall from "../../components/widgetSmall/WidgetSmall";
import WidgetLg from "../../components/widgetLg/WidgetLg";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="home_widgets">
        <WidgetSmall />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
