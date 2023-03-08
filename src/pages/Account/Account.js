import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../components/common/Breadcrumbs';

const Account = () => {
  const breadcrumbItems = [
    { title: 'Fintech', link: '/' },
    { title: 'Account', link: '#d' },
  ];

  return (
    <div className="page-content">
      <Container fluid>
        <Breadcrumbs title="Account" breadcrumbItems={breadcrumbItems} />
        {/** Contenido Row -> Col -> etc */}
      </Container>
    </div>
  );
};

export default Account;
