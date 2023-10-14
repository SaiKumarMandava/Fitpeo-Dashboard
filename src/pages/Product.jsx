import React from "react";
import sale0 from "../assets/product1.jpg";
import sale1 from "../assets/product2.jpeg";
import sale2 from "../assets/product3.jpg";
import sale3 from "../assets/product4.jpeg";
import sale4 from "../assets/product5.jpg";
import sale5 from "../assets/product6.jpg";
const Product = () => {
  return (
    <div>
      <div  className="tableFull">
        <div >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}class="tableHeader"
          >
            <h3>Product Sell</h3>
            <div
              style={{
                display: "flex",
                gap: "20px",
              }}class="tableHeader"
            >
              <input
                class="search"
                type="search"
                placeholder="Search..."
                style={{
                  width: "300px",
                  backgroundColor: "white",
                  outline: "none",
                  borderBlockColor: "none",
                }}
              ></input>
              <select
                style={{
                  border: "none",
                  outline: "none",
                  backgroundColor: "lightgray",
                  borderRadius: "5px 5px 5px 5px",
                  padding: "6px",
                }}
                class="tableDPWN"
              >
                <option value="1">Last 30 days</option>
                <option value="2">Last 6 Months</option>
                <option value="3">Last 3 years</option>
              </select>
            </div>
          </div>
        </div>
        <table>
          <tr>
            <th>Product Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Total Sales</th>
          </tr>
          <tr class="tablerow">
            <td>
              <div
                style={{ display: "flex", gap: "10px" }}
                className="tableData"
              >
                <img
                  src={sale0}
                  width="100"
                  style={{ borderRadius: "5px 5px 5px 5px" }}
                />
                <div style={{ padding: "8px" }}>
                  <h5>Product 1</h5>
                  <p>Abcdefghijklmnopqrstuvwxyz</p>
                </div>
              </div>
            </td>
            <td>10 in stock</td>
            <td style={{ fontWeight: "bold" }}>$50</td>
            <td>100</td>
          </tr>
          <tr class="tablerow">
            <td>
              <div
                style={{ display: "flex", gap: "10px" }}
                className="tableData"
              >
                <img
                  src={sale1}
                  width="100"
                  style={{ borderRadius: "5px 5px 5px 5px" }}
                />
                <div style={{ padding: "8px" }}>
                  <h5>Product 2</h5>
                  <p>Abcdefghijklmnopqrstuvwxyz</p>
                </div>
              </div>
            </td>
            <td>20 in stock</td>
            <td style={{ fontWeight: "bold" }}>$60</td>
            <td>120</td>
          </tr>
          <tr class="tablerow">
            <td>
              <div
                style={{ display: "flex", gap: "10px" }}
                className="tableData"
              >
                <img
                  src={sale2}
                  width="100"
                  style={{ borderRadius: "5px 5px 5px 5px" }}
                />
                <div style={{ padding: "8px" }}>
                  <h5>Product 3</h5>
                  <p>Abcdefghijklmnopqrstuvwxyz</p>
                </div>
              </div>
            </td>
            <td>30 in stock</td>
            <td style={{ fontWeight: "bold" }}>$70</td>
            <td>130</td>
          </tr>
          <tr class="tablerow">
            <td>
              <div
                style={{ display: "flex", gap: "10px" }}
                className="tableData"
              >
                <img
                  src={sale3}
                  width="100"
                  style={{ borderRadius: "5px 5px 5px 5px" }}
                />
                <div style={{ padding: "8px" }}>
                  <h5>Product 4</h5>
                  <p>Abcdefghijklmnopqrstuvwxyz</p>
                </div>
              </div>
            </td>
            <td>40 in stock</td>
            <td style={{ fontWeight: "bold" }}>$80</td>
            <td>140</td>
          </tr>
          <tr class="tablerow">
            <td>
              <div
                style={{ display: "flex", gap: "10px" }}
                className="tableData"
              >
                <img
                  src={sale4}
                  width="100"
                  style={{ borderRadius: "5px 5px 5px 5px" }}
                />
                <div style={{ padding: "8px" }}>
                  <h5>Product 5</h5>
                  <p>Abcdefghijklmnopqrstuvwxyz</p>
                </div>
              </div>
            </td>
            <td>50 in stock</td>
            <td style={{ fontWeight: "bold" }}>$90</td>
            <td>150</td>
          </tr>

          <tr class="tablerow">
            <td>
              <div
                style={{ display: "flex", gap: "10px" }}
                className="tableData"
              >
                <img
                  src={sale0}
                  width="100"
                  style={{ borderRadius: "5px 5px 5px 5px" }}
                />
                <div style={{ padding: "8px" }}>
                  <h5>Product 6</h5>
                  <p>Abcdefghijklmnopqrstuvwxyz</p>
                </div>
              </div>
            </td>
            <td>60 in stock</td>
            <td style={{ fontWeight: "bold" }}>$100</td>
            <td>170</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Product;
