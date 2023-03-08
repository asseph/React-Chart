import { Container } from 'reactstrap';

import Breadcrumbs from '../../components/common/Breadcrumbs';

const SaleDetails = () => {
  const breadcrumbItems = [
    { title: 'Fintech', link: '/' },
    { title: 'Sale Detail', link: '#d' },
  ];

  return (
    <div className="page-content">
      <Container fluid>
        <Breadcrumbs title="Sale Detail" breadcrumbItems={breadcrumbItems} />
        {/** Contenido Row -> Col -> etc */}
      </Container>
    </div>
  );
};

export default SaleDetails;
