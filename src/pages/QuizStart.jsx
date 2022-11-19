import styled from 'styled-components';
import closeIcon from '../assets/icon/icon_close.svg';
import quizTitle from '../assets/image/img_quiztitle.svg';
import quizLogo from '../assets/image/img_quizlogo.svg';
import { theme } from '../styles/theme';
import { useNavigate } from 'react-router-dom';

function QuizStart() {
  const navigate = useNavigate();

  return (
    <StQuizStartContainer>
      <StCloseIcon src={closeIcon} alt="닫기버튼" onClick={() => navigate('/')} />
      <StLogo src={quizLogo} alt="퀴즈로고" />
      <StQuiztitle src={quizTitle} alt="퀴즈타이틀" />
      <span>풀어보시던지 ㅋ</span>
      <StStartBtn onClick={() => navigate('/quizIng')}>테스트 시작!</StStartBtn>
    </StQuizStartContainer>
  );
}

export default QuizStart;

const StQuizStartContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > span {
    margin-bottom: 7.5rem;

    color: ${theme.colors.black};
    font-size: ${theme.fontSize.body2};
    font-weight: ${theme.fontWeight.light};
  }
`;
const StCloseIcon = styled.img`
  margin: 7.4rem 3rem 8.2rem 32.1rem;
`;

const StLogo = styled.img`
  width: 20rem;
  height: 20rem;

  margin-top: 3.3rem;
  margin-bottom: 3.6rem;
`;

const StQuiztitle = styled.img`
  width: 20.5rem;
  height: 5.4rem;

  margin-bottom: 0.8rem;
`;

const StStartBtn = styled.button`
  width: 17.9rem;
  height: 5.2rem;

  background-color: ${theme.colors.jemminiBlue};
  border-radius: ${theme.radius.radius};

  color: white;
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSize.heading5};
  line-height: 140%;
`;
