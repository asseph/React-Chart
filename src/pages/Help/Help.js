import { Container } from 'reactstrap';

import Breadcrumbs from '../../components/common/Breadcrumbs';

const Help = () => {
  const breadcrumbItems = [
    { title: 'Fintech', link: '/' },
    { title: 'Help', link: '#d' },
  ];

  return (
    <div className="page-content">
      <Container fluid>
        <Breadcrumbs title="Help" breadcrumbItems={breadcrumbItems} />
        {/** Contenido Row -> Col -> etc */}
      </Container>
    </div>
  );
};

export default Help;
