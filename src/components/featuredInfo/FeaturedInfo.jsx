import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featured_item">
        <span className="featured_title">Revenue</span>
        <div className="featured_money_container">
          <span className="featured_money">$2,415</span>
          <span className="featured_money_rate">
            -11.4 <ArrowDownward className="featured_icon negative" />
          </span>
        </div>
        <span className="featured_subT">Compared to last month</span>
      </div>
      <div className="featured_item">
        <span className="featured_title">Sales</span>
        <div className="featured_money_container">
          <span className="featured_money">$4,415</span>
          <span className="featured_money_rate">
            -1.4 <ArrowDownward className="featured_icon negative" />
          </span>
        </div>
        <span className="featured_subT">Compared to last month</span>
      </div>
      <div className="featured_item">
        <span className="featured_title">Cost</span>
        <div className="featured_money_container">
          <span className="featured_money">$2,225</span>
          <span className="featured_money_rate">
            +2.4 <ArrowUpward className="featured_icon" />
          </span>
        </div>
        <span className="featured_subT">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
