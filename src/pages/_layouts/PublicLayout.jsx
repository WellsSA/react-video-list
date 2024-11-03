import PropTypes from 'prop-types';
import styled from 'styled-components';

const PublicLayout = ({ children }) => {
  return (
    <Main>
      <header>
        <h1>Listagem de Filmes | Thiago Bussola</h1>
      </header>
      <section>
        {children}
      </section>
    </Main>
  );
}

PublicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicLayout;

const Main = styled.main`
  > header {
    background-color: var(--background-600);
    padding: 48px;
  }

  > section {
    padding: 48px;
    width: 100%;
    height: 100%;
  }
`;
