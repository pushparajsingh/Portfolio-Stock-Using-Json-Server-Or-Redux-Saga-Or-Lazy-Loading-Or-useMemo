import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPortfolio } from "../../Redux/Actions/action";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ListGroup } from "react-bootstrap";
import Stock from "../../Components/Layouts/stocks/Stock";
import { Card } from "react-bootstrap";
import { CChart } from "@coreui/react-chartjs";

const Portfolio = () => {
  const dispatch = useDispatch();
  const getAllData = useSelector((state) => state?.AllPortFolioData?.data);
  const [stockData, setStockData] = useState();
  const [percentage, setPercentage] = useState();

  useEffect(() => {
    dispatch(getPortfolio());
  }, []);

  useEffect(() => {
    setStockData(getAllData);
  }, [getAllData]);
  useEffect(() => {
    if (stockData) {
      let totalAmount = 0;
      let mfAmt = 0;
      let ETFAmt = 0;
      stockData.map((item, index) => {
        totalAmount += item.invasted_amt;
        if (index < 4) {
          mfAmt += item.invasted_amt;
        } else {
          ETFAmt += item.invasted_amt;
        }
      });

      let mfPercent = (100 * mfAmt) / totalAmount;
      let etfPercent = (100 * ETFAmt) / totalAmount;
      console.log(parseInt(mfPercent), 555);
      console.log(parseInt(etfPercent), 888);
      setPercentage([mfPercent, etfPercent]);
      console.log(333, stockData[3]);
    }
  }, [stockData]);

  return (
    <>
      <section className="py-3 portfolio-wrapper">
        <Container fluid>
          <Row>
            <Col lg={9}>
              <ListGroup>
                {stockData &&
                  stockData?.map((data, i) => {
                    return <Stock data={data} key={i} />;
                  })}
              </ListGroup>
            </Col>
            <Col lg={3}>
              <Card className="p-3">
                <h5>Portfolio</h5>
                <CChart
                  type="doughnut"
                  data={{
                    labels: ["Mutual Fund", "ETF's"],
                    datasets: [
                      {
                        backgroundColor: ["#00D8FF", "#a8a532"],
                        data: percentage,
                      },
                    ],
                  }}
                />
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Portfolio;
