import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../components/common/Breadcrumbs';

const AddProduct = () => {
  const breadcrumbItems = [
    { title: 'Fintech', link: '/' },
    { title: 'Add Product', link: '#d' },
  ];

  return (
    <div className="page-content">
      <Container fluid>
        <Breadcrumbs title="Add Product" breadcrumbItems={breadcrumbItems} />
        {/** Contenido Row -> Col -> etc */}
      </Container>
    </div>
  );
};

export default AddProduct;
