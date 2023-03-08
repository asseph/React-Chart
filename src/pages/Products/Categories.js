import { Container } from 'reactstrap';

import Breadcrumbs from '../../components/common/Breadcrumbs';

const Categories = () => {
  const breadcrumbItems = [
    { title: 'Fintech', link: '/' },
    { title: 'Categories', link: '#d' },
  ];

  return (
    <div className="page-content">
      <Container fluid>
        <Breadcrumbs title="Categories" breadcrumbItems={breadcrumbItems} />
        {/** Contenido Row -> Col -> etc */}
      </Container>
    </div>
  );
};

export default Categories;
