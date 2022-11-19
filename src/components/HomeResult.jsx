import styled from 'styled-components';
import { theme } from '../styles/theme.js';
import HomeHeader from './HomeHeader.jsx';
// import HomeSearchBtn from './HomeSearchBtn.jsx';
import HomeQuizBtn from './HomeQuizBtn.jsx';

export default function HomeResult() {
  return (
    <>
      <StResultContainer>
        <HomeHeader />
        <HomeQuizBtn type="button" />

        <StMeaningContainer>
          <StMeaingContainerTitle>"킹받네"의 번역</StMeaingContainerTitle>
          <StMeaningOutput>열 받는다</StMeaningOutput>
          <StMeaingOutputDesc>어쩌구저쩌구</StMeaingOutputDesc>
        </StMeaningContainer>
        <StExampleWrap>
          <StExample>개킹받네</StExample>
        </StExampleWrap>
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
`;

const StMeaningContainer = styled.div`
  margin-top: 2rem;

  width: 30.5rem;
  height: 12.6rem;

  border: 1px solid ${theme.colors.grey200};

  border-radius: ${theme.radius.radius};
`;

const StMeaingContainerTitle = styled.div`
  width: 76px;
  height: 18px;

  margin-left: 1.5rem;
  margin-top: 1.6rem;

  color: ${theme.colors.jemminiRed};

  font-size: ${theme.fontSize.description};
  font-weight: ${theme.fontWeight.light};
`;

const StMeaningOutput = styled.div`
  margin-left: 1.6rem;
  margin-top: 0.2rem;

  width: 77px;
  height: 28px;

  font-size: ${theme.fontSize.heading4};
  font-weight: ${theme.fontWeight.medium};
`;

const StMeaingOutputDesc = styled.div`
  margin-left: 1.5rem;
  margin-top: 1rem;

  width: 212px;
  height: 36px;

  font-size: ${theme.fontSize.description};
  font-weight: ${theme.fontWeight.light};
`;
const StExampleWrap = styled.div`
  margin-top: 1.2rem;

  width: 30.5rem;
  height: 4.4rem;

  display: flex;
  align-items: center;

  border: 1px solid ${theme.colors.jemminiBlue};

  border-radius: ${theme.radius.radius};
`;

const StExample = styled.div`
  margin-left: 1.6rem;

  color: ${theme.colors.black};
  font-size: ${theme.fontSize.body1};
  font-weight: ${theme.fontWeight.light};
`;

const StExampleMessage = styled.div`
  margin-top: 0.8rem;

  color: ${theme.colors.jemminiBlue};
  font-size: ${theme.fontSize.description};

  font-weight: 400;
`;
