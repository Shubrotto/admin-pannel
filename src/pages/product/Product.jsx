import "./product.css";
import { Link } from "react-router-dom";
import Chart from "../../components/charts/Chart";
import { productData } from "../../dummyData";
import Img from "../../assets/images/avatar.jpg";
import { Publish } from "@mui/icons-material";

const Product = () => {
  return (
    <div className="product">
      <div className="product_title_container">
        <h1 className="product_title">Product</h1>
        <Link to="/newProduct">
          <button className="product_add_btn">Create</button>
        </Link>
      </div>
      <div className="product_top">
        <div className="product_top_left">
          <Chart data={productData} dataKey="Sales" title="Sales performance" />
        </div>
        <div className="product_top_right">
          <div className="product_info_top">
            <img
              className="productImg"
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <span className="product_name">Apple Airpods</span>
          </div>
          <div className="product_info_bottom">
            <div className="product_info_item">
              <span className="product_info_key">id:</span>
              <span className="product_info_value">123</span>
            </div>
            <div className="product_info_item">
              <span className="product_info_key">Sales:</span>
              <span className="product_info_value">1234</span>
            </div>
            <div className="product_info_item">
              <span className="product_info_key">Active:</span>
              <span className="product_info_value">yes</span>
            </div>
            <div className="product_info_item">
              <span className="product_info_key">in stock:</span>
              <span className="product_info_value">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product_bottom">
        <form className="product_form">
          <div className="product_form_left">
            <label>Product Name</label>
            <input type="text" placeholder="Apple Airpods" />
            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="product_form_right">
            <div className="product_upload">
              <img className="upload_img" src={Img} alt="" />
              <label for="file">
                <Publish />
              </label>
              <input
                type="file"
                name="file"
                id="file"
                style={{ display: "none" }}
              />
            </div>
            <button className="product_update_btn">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
