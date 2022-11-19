import styled from 'styled-components';
import { theme } from '../styles/theme';

function Home() {
  return (
    <StHomeContainer>
      <h1>안녕하세요</h1>
    </StHomeContainer>
  );
}

export default Home;

const StHomeContainer = styled.section`
  & > h1 {
    color: ${theme.colors.jemminiBlue};
    font-weight: ${theme.fontWeight.medium};
    font-size: ${theme.fontSize.heading1};
  }
`;
