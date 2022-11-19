import styled from 'styled-components';
import closeIcon from '../assets/icon/icon_close.svg';
import { theme } from '../styles/theme';
import Result from '../components/quizEnd/Result';
import { useNavigate } from 'react-router-dom';
import resultTitleOne from '../assets/image/img_result-title-one.svg';
import resultImgOne from '../assets/image/img_result-img-one.svg';
import resultTitleTwo from '../assets/image/img_result-title-two.svg';
import resultImgTwo from '../assets/image/img_result-img-two.svg';
import resultTitleThree from '../assets/image/img_result-title-three.svg';
import resultImgThree from '../assets/image/img_result-img-three.svg';
import resultTitleFour from '../assets/image/img_result-title-four.svg';
import resultImgFour from '../assets/image/img_result-img-four.svg';

function QuizEnd() {
  const navigate = useNavigate();
  const resultList = [
    {
      img: resultImgOne,
      title: resultTitleOne,
      desctitle: '잼민이 그 잡체네요 쫑받게.',
      descvalue1: '당신은 현직 퓨어 잼민이급 언어를 구사합니다.',
      descvalue2: '벽이 느껴지네요, 완벽',
    },
    {
      img: resultImgTwo,
      title: resultTitleTwo,
      desctitle: '생각보다 좀 치네?',
      descvalue1: '제법 트렌드에 민감한 당신,',
      descvalue2: '조금 더 노력해서 완벽한 잼민이가 되어보아요',
    },
    {
      img: resultImgThree,
      title: resultTitleThree,
      desctitle: '어쩔 킹저씨?',
      descvalue1: '할말하않 당신은 딱 킹받는 아저씨 수준이에요.',
      descvalue2: '할말하앉, 당신은 킹받는 아조씨에요.',
    },
    {
      img: resultImgFour,
      title: resultTitleFour,
      desctitle: '여기는 젊은 친구들 노는 곳이에요.',
      descvalue1: '요즘 친구들 참 어렵죠?',
      descvalue2: '번역기로 공부하세요.',
    },
  ];

  return (
    <StQuizEndContainer>
      <StCloseIcon src={closeIcon} alt="닫기버튼" onClick={() => navigate('/')} />
      <Result resultList={resultList} />
      <StRestartBtn onClick={() => navigate('/quizIng')}>다시하기</StRestartBtn>
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

const StRestartBtn = styled.button`
  width: 17.9rem;
  height: 5.2rem;

  background-color: ${theme.colors.jemminiBlue};
  border-radius: ${theme.radius.radius};

  color: white;
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSize.heading5};
  line-height: 140%;
`;
