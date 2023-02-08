import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ListGroup } from "react-bootstrap";
import Stock from "../../Components/Layouts/stocks/Stock";
import { Card } from "react-bootstrap";
import { CChart } from "@coreui/react-chartjs";
import { getStocks } from "../../Redux/actions";

const Portfolio = () => {
  const dispatch = useDispatch();
  const getAllData = useSelector((state) => state?.stock?.stockData);
  const [stockData, setStockData] = useState();

  useEffect(() => {
    dispatch(getStocks());
  }, []);

  useEffect(() => {
    setStockData(getAllData);
  }, [getAllData]);

  const percentage = useMemo(() => {
    // execute when stockData change.
    if (stockData) {
      let totalAmount = 0;
      let mfAmt = 0;
      let ETFAmt = 0;
      stockData.forEach((item, index) => {
        totalAmount += item.invasted_amt;
        if (index < 4) {
          mfAmt += item.invasted_amt;
        } else {
          ETFAmt += item.invasted_amt;
        }
      });

      let mfPercent = (100 * mfAmt) / totalAmount;
      let etfPercent = (100 * ETFAmt) / totalAmount;
      return [mfPercent, etfPercent];
    }
  }, [stockData]);

  return (
    <>
      <section className="py-3 portfolio-wrapper">
        <Container fluid>
          <Row>
            <Col lg={9}>
              <ListGroup>
                {stockData?.map((data, i) => {
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
