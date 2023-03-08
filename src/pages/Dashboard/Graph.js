import 'chart.js/auto';
import { useState } from 'react';
import { Card, CardBody, Tooltip } from 'reactstrap';

// components Charts
import LineChart from '../../components/charts/LineChart';
import BarChart from '../../components/charts/BarChart';
import DouChart from '../../components/charts/DouChart';
import PieChart from '../../components/charts/PieChart';
import RadarChart from '../../components/charts/RadarChart';

function Graph({ data, type, title, description }) {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  // defino todos los tipos 'type' posibles
  const allTypes = {
    line: <LineChart data={data} />,
    bar: <BarChart data={data} />,
    doughnut: <DouChart data={data} />,
    pie: <PieChart data={data} />,
    radar: <RadarChart data={data} />,
  };
  // busco en el objeto anterior el type recibido como props
  // sino se recibe muestro uno como default
  const GraphDiv = allTypes[type] || <LineChart data={data} />;

  // coloco como id del tooltip la primera palabra del titulo
  const idRandTooltip = title.split(' ')[0];

  return (
    <Card style={{ height: 'calc(100% - 25px)' }}>
      <CardBody>
        <h4 className="card-title d-flex align-items-center">
          {title}
          {description && (
            <>
              <span id={idRandTooltip} className="ms-2">
                <i className="ri-information-line"></i>
              </span>
              <Tooltip
                isOpen={tooltipOpen}
                autohide={false}
                target={idRandTooltip}
                toggle={() => {
                  setTooltipOpen(!tooltipOpen);
                }}
              >
                {description}
              </Tooltip>
            </>
          )}
        </h4>
        <div>{GraphDiv}</div>
      </CardBody>
    </Card>
  );
}

export default Graph;
