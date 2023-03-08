import { Container } from 'reactstrap';

import Breadcrumbs from '../../components/common/Breadcrumbs';

const AddSupplier = () => {
  const breadcrumbItems = [
    { title: 'Fintech', link: '/' },
    { title: 'Add Supplier', link: '#d' },
  ];

  return (
    <div className="page-content">
      <Container fluid>
        <Breadcrumbs title="Add Supplier" breadcrumbItems={breadcrumbItems} />
        {/** Contenido Row -> Col -> etc */}
      </Container>
    </div>
  );
};

export default AddSupplier;
