import styled from 'styled-components';
import closeIcon from '../assets/icon/icon_close.svg';
import { theme } from '../styles/theme';
import Result from '../components/quizEnd/Result';

function QuizEnd() {
  return (
    <StQuizEndContainer>
      <StCloseIcon src={closeIcon} alt="닫기버튼" />
      <Result />
    </StQuizEndContainer>
  );
}

export default QuizEnd;

const StQuizEndContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StCloseIcon = styled.img`
  margin: 7.4rem 3rem 5.4rem 32.1rem;
`;
