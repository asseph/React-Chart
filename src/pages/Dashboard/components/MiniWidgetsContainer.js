import { useEffect, useState } from 'react';
import { Col, Container, Row, Button, ButtonGroup } from 'reactstrap';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

// of this page
import MiniWidgets from '../../Analytics/MiniWidgets';

// Helper
import { axiosWithOutToken } from '../../../services/axios';
import { getPercentDif } from '../../Help/calculate';


const MiniWidgetsContainer = () => {
  const { t } = useTranslation();
  const { user: { role, branch_id }} = useSelector( state => state.auth);
  const [loading, setLoading] = useState(true);
  const [showBy, setShowBy]=  useState('quarter');; // weeks, quartes, months
  const [currentPeriod, setCurrentPeriod] = useState('...');
  const [lastPeriod, setLastPeriod] = useState('...');


  const handleButtonGroup = (newShowBy) => {
    setShowBy(newShowBy);
  };

  const [reports, setReports] = useState([
    {
      icon: 'ri-stack-line',
      title: 'Number of Sales',
      value: 0, //'1452',
      rate: 0, //'2.4%',
      desc: 'From previous period',
    },
    {
      icon: 'ri-store-2-line',
      title: 'Sales Revenue',
      value: 0, //'$ 38452',
      rate: 0, //'2.4%',
      desc: 'From previous period',
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Average Price',
      value: 0, //'$ 15.4',
      rate: 0, //'2.4%',
      desc: 'From previous period',
    },
  ]);

  const [reportsByBranch, setReportsByBranch] = useState([
    {
      icon: 'ri-stack-line',
      title: 'Number of Sales',
      value: 0, //'1452',
      rate: 0, //'2.4%',
      desc: 'From previous period',
    },
    {
      icon: 'ri-store-2-line',
      title: 'Sales Revenue',
      value: 0, //'$ 38452',
      rate: 0, //'2.4%',
      desc: 'From previous period',
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Average Price',
      value: 0, //'$ 15.4',
      rate: 0, //'2.4%',
      desc: 'From previous period',
    },
  ]);

  useEffect(() => {
    setLoading(true);
    axiosWithOutToken(
      `/charts/branches-compare-data?show_by=${showBy}&cashflow=true&periods=4`,
    )
      .then(({ data }) => {
        const { data:dataBranch } = data;
        setLoading(false);
        setReports([{
            icon: 'ri-stack-line',
            title: t('Number of Sales'),
            value: data.sales_count_current_period_total,
            rate: `${getPercentDif(data.sales_count_current_period_total, data.sales_count_last_period_total)} %`,
            desc: t('From previous period'),
          },
          {
            icon: 'ri-store-2-line',
            title: t('Sales Revenue'),
            value: `$ ${data.sales_amount_current_period_total}`,
            rate: `${getPercentDif(data.sales_amount_current_period_total, data.sales_amount_last_period_total)} %`,
            desc: t('From previous period'),
          },
          {
            icon: 'ri-money-dollar-circle-line',
            title: t('Investments'),
            value: `$ ${data.sales_amount_current_period_total - data.purchase_amount_current_period_total}`,
            rate: `${getPercentDif(
              data.sales_amount_current_period_total - data.purchase_amount_current_period_total,
              data.sales_amount_last_period_total - data.purchase_amount_last_period_total
              )} %`,
            desc: t('From previous period'),
          }
        ]);
        if ( branch_id !== null ) {
          setReportsByBranch([{
              icon: 'ri-stack-line',
              title: t('Number of Sales'),
              value: dataBranch[branch_id - 1].sales_count_current_period,
              rate: `${getPercentDif(dataBranch[branch_id - 1].sales_count_current_period, dataBranch[branch_id - 1].sales_count_last_period)} %`,
              desc: t('From previous period'),
            },
            {
              icon: 'ri-store-2-line',
              title: t('Sales Revenue'),
              value: `$ ${dataBranch[branch_id - 1].sales_amount_current_period}`,
              rate: `${getPercentDif(dataBranch[branch_id - 1].sales_amount_current_period, dataBranch[branch_id - 1].sales_amount_last_period)} %`,
              desc: t('From previous period'),
            },
            {
              icon: 'ri-money-dollar-circle-line',
              title: t('Investments'),
              value: `$ ${dataBranch[branch_id - 1].sales_amount_current_period - dataBranch[branch_id - 1].purchase_amount_current_period}`,
              rate: `${getPercentDif(
              dataBranch[branch_id - 1].sales_amount_current_period - dataBranch[branch_id - 1].purchase_amount_current_period,
              dataBranch[branch_id - 1].sales_amount_last_period - dataBranch[branch_id - 1].purchase_amount_last_period
              )} %`,
              desc: t('From previous period'),
            }
          ]);
        } 
        
        setCurrentPeriod(data.labels[data.labels.length -1]);
        setLastPeriod(data.labels[data.labels.length -2]);
        console.log(data);
      })
      .catch(err => console.log(err.message));
  }, [showBy]);

  return (
    <Container fluid className='w-100'>
    <Row>
        <Row className='row-flex title__analytics p-2'>
            {/* Last period: {lastPeriod} | Current period: {currentPeriod}*/}
            {`${t('Current period')}:  ${currentPeriod}`}
            
            {/* Dropdown para seleccionar periodo */}
            <ButtonGroup className='button-group__analytics'>
            <Button onClick={()=>handleButtonGroup('weeks')}>
                {`${t('Weeks')}`}
            </Button>
            <Button onClick={()=>handleButtonGroup('months')}>
								{`${t('Months')}`}
            </Button>
            <Button onClick={()=>handleButtonGroup('quarter')}>
								{`${t('Quarter')}`}
            </Button>
            </ButtonGroup>
        </Row>
        <Row className='mt-3 row-flex'>
        {
            branch_id 
            ? <MiniWidgets reports={reportsByBranch} />
            : <MiniWidgets reports={reports} />
        }
        </Row>
    </Row>
    </Container>
  );
};

export default MiniWidgetsContainer;
