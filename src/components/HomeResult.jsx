import styled from 'styled-components';
import { theme } from '../styles/theme.js';
import HomeHeader from '../components/HomeHeader.jsx';
import HomeSearchBtn from '../components/HomeSearchBtn.jsx';
import HomeQuizBtn from '../components/HomeQuizBtn.jsx';

export default function HomeResult() {
  return (
    <>
      <HomeHeader />
      <HomeQuizBtn type="button" />
      <StResultContainer>
        <StResultMeaningContainer></StResultMeaningContainer>
        <StExample>개킹받네</StExample>
        <StExampleMessage>예문 누르면 복사됌 ㅋ</StExampleMessage>
      </StResultContainer>
    </>
  );
}

const StResultContainer = styled.div`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 30.5rem;
  height: 12.6rem;
`;

const StResultMeaningContainer = styled.div`
  width: 30.5rem;
  height: 12.6rem;

  border: 1px solid ${theme.colors.grey200};
`;

const StExample = styled.div`
  width: 30.5rem;
  height: 4.4rem;

  color: ${theme.colors.black};
  font-size: ${theme.fontSize.body1};
  font-weight: ${theme.fontWeight.light};

  border: 1px solid ${theme.colors.jemminiBlue};
`;

const StExampleMessage = styled.div`
  margin-top: 0.8rem;

  color: ${theme.colors.jemminiBlue};
  font-size: ${theme.fontSize.description};

  font-weight: 400;
`;
