import { Doughnut } from 'react-chartjs-2';

const DouChart = () => {
  const data = {
    labels: ['Earnings', 'Investment'],
    datasets: [
      {
        data: [33300, 8910],
        backgroundColor: ['#556ee6', '#ebeff2'],
        hoverBackgroundColor: ['#556ee6', '#ebeff2'],
        hoverBorderColor: '#fff',
      },
    ],
  };
  return (
    <>
      <Doughnut width={474} height={260} data={data} />
    </>
  );
};

export default DouChart;
