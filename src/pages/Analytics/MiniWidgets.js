import { useEffect, useState } from 'react';
import { Col, Card, CardBody, Spinner } from 'reactstrap';
import { useAxios } from '../../hooks/useAxios';

const MiniWidgets = ({ reports }) => {
  const [loading, setLoading] = useState(true);
  // const [response, error, loading] = useAxios(
  //   '/charts/branches-compare-data?show_by=weeks&cashflow=true&periods=4',
  // );
  ///
  ///charts/branches-profit-total?cashflow=true&months=24
  // console.log(response, loading);

  // const { total_amount_purchase, total_amount_sales, total_profit } = response;

  // const reports = [
  //   {
  //     icon: 'ri-stack-line',
  //     title: 'Number of Sales',
  //     value: response?.total_amount_sales,
  //     rate: '2.4%',
  //     desc: 'From previous period',
  //   },
  //   {
  //     icon: 'ri-store-2-line',
  //     title: 'Sales Revenue',
  //     value: '$ ' + response?.total_profit,
  //     rate: '2.4%',
  //     desc: 'From previous period',
  //   },
  //   {
  //     icon: 'ri-briefcase-4-line',
  //     title: 'Total Investment',
  //     value: '$ ' + response?.total_amount_purchase,
  //     rate: '2.4%',
  //     desc: 'From previous period',
  //   },
  // ];

  setTimeout(() => {
    setLoading(false);
  }, 1800);

  return (
    <>
      {reports.map((report, key) => (
        <Col key={key} md={4}>
          {loading ? (
            <Card>
              <CardBody>
                <div className="d-flex align-items-center justify-content-center">
                  <Spinner color="primary" type="grow">
                    Loading...
                  </Spinner>
                </div>
              </CardBody>
            </Card>
          ) : (
            <>
              <Card>
                <CardBody>
                  <div className="d-flex">
                    <div className="flex-grow-1 overflow-hidden">
                      <p className="text-truncate font-size-14 mb-2">{report.title}</p>
                      <h4 className="mb-0">{report.value}</h4>
                    </div>
                    <div className="flex-shrink-0 ms-3">
                      <div className="text-primary">
                        <i className={report.icon + ' font-size-24'}></i>
                      </div>
                    </div>
                  </div>
                </CardBody>

                <CardBody className="border-top py-3">
                  <div className="text-truncate">
                    <span className={`badge ${(report.rate > 0) ? 'badge-soft-danger': 'badge-soft-danger'} font-size-11 me-1`}>
                      <i className={`${(report.rate > 0) ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'}`}> </i> {report.rate}
                    </span>
                    <span className="text-muted ms-2">{report.desc}</span>
                  </div>
                </CardBody>
              </Card>
            </>
          )}
        </Col>
      ))}
    </>
  );
};

export default MiniWidgets;
