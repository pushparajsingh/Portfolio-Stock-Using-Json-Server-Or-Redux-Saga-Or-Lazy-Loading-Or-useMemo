import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaCoins } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { GrCurrency } from "react-icons/gr";
import { IoMdArrowDropup } from "react-icons/io";
import { ProgressBar, Button } from "react-bootstrap";

const Stock = ({ data }) => {
  return (
    <>
      <div className="stock-show">
        <div>
          <AiOutlineMenu className="AiOutlineMenu-position" />
        </div>
        <div className="spaceBox1 box">
          <div>{data.type}</div>
          <div className="total_amount">&#36;{data.total_amount}</div>
        </div>
        <div className="spaceBox box2">
          <div className="iShareColor">iShares</div>
          <div>
            <b>{data.script}</b>
          </div>
          <div>{data.stock_type}</div>
        </div>
        <div className="spaceBox box3">
          <div>
            <FaCoins />
            Quantity
          </div>
          <div>
            <MdAlternateEmail /> Avg. Cost
          </div>
          <div>
            <GrCurrency /> Invested Amt
          </div>
        </div>
        <div className="spaceBox box4">
          <div>&#36;{data.quantity}</div>
          <div>&#36;{data.avg_cost}</div>
          <div>&#36;{data.invasted_amt}</div>
        </div>
        <div>
          <div className="spaceBox box5">
            <div>
              <b>
                Market Value
                <span className="margin-price">&#36;{data.price}</span>
              </b>
            </div>
            <div>
              % of portfolio value
              <span className="margin2-price">{data.portfoli_percent}%</span>
            </div>
            <div>
              <ProgressBar
                className="progressbar"
                now={data?.portfoli_percent}
              />
            </div>
          </div>
        </div>
        <div className="spaceBox box7">
          <div>
            <b>Unrealized P/L &nbsp;&nbsp;&nbsp;&#36;{data.unrealizedPL}</b>
          </div>
          <div>
            % Return{" "}
            <span className="spaceText">
              {data.return >= 0 ? (
                <IoMdArrowDropup className="colorSize" />
              ) : (
                <IoMdArrowDropup className="colorSize2" />
              )}
              {data.return}%
            </span>
          </div>
          <div>
            <div className="unrealized-progress">
              <div className="progress-bg">
                {data.return >= 0 ? (
                  <div
                    className="positive"
                    style={{ width: data?.return / 2 + "%" }}
                  />
                ) : (
                  <div
                    className="negative"
                    style={{
                      width: Math.abs(data.return) / 2 + "%",
                      marginLeft: 50 - Math.abs(data?.return) / 2 + "%",
                    }}
                  ></div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="box8">
          <Button variant="outline-danger d-block mb-1">Buy</Button>
          <Button variant="outline-danger">Sell</Button>
        </div>
      </div>
    </>
  );
};
export default Stock;
