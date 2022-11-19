import styled from 'styled-components';
import { theme } from '../styles/theme.js';
import HomeHeader from '../components/HomeHeader.jsx';
import HomeSearchBtn from '../components/HomeSearchBtn.jsx';
import HomeQuizBtn from '../components/HomeQuizBtn.jsx';

function Home() {
  return (
    <StHomeContainer>
      <HomeHeader />
      <StHomeSearchContainer>
        <StHomeSearchInput placeholder="단어 입력하던지ㅋ" />
        <HomeSearchBtn />
      </StHomeSearchContainer>

      <HomeQuizBtn type="button" />
    </StHomeContainer>
  );
}

export default Home;

const StHomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > h1 {
    color: ${theme.colors.jemminiBlue};
    font-weight: ${theme.fontWeight.medium};
    font-size: ${theme.fontSize.heading1};
  }
`;

const StHomeSearchContainer = styled.div`
  display: flex;

  margin-top: 3.1rem;
`;

const StHomeSearchInput = styled.input`
  width: 25.3rem;
  height: 4.4rem;

  border: 2px solid ${theme.colors.grey200};

  border-radius: ${theme.radius.radius};
`;
