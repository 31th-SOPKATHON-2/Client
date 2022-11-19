import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import icon_error from '../assets/icon/icon_error.svg';
import icon_correct from '../assets/icon/icon_correct.svg';
import icon_close from '../assets/icon/icon_close.svg';
import icon_quiz1 from '../assets/icon/icon_quiz1.svg';
import icon_quiz2 from '../assets/icon/icon_quiz2.svg';
import icon_quiz3 from '../assets/icon/icon_quiz3.svg';
import icon_quiz4 from '../assets/icon/icon_quiz4.svg';
import icon_quiz5 from '../assets/icon/icon_quiz5.svg';
import icon_quiz6 from '../assets/icon/icon_quiz6.svg';
import icon_quiz7 from '../assets/icon/icon_quiz7.svg';
import image_quiz from '../assets/image/image_quiz.svg';
import { theme } from '../styles/theme';
import { getQuizList } from '../libs/quizAPI';
import { useNavigate } from 'react-router-dom';
import QuizModal from '../components/QuizModal';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { scoreState } from '../core/atom';

const QUIZ_NUMBER = [
  {
    id: 1,
    src: icon_quiz1,
    alt: 'number1',
  },
  {
    id: 2,
    src: icon_quiz2,
    alt: 'number2',
  },
  {
    id: 3,
    src: icon_quiz3,
    alt: 'number3',
  },
  {
    id: 4,
    src: icon_quiz4,
    alt: 'number4',
  },
  {
    id: 5,
    src: icon_quiz5,
    alt: 'number5',
  },
  {
    id: 6,
    src: icon_quiz6,
    alt: 'number6',
  },
  {
    id: 7,
    src: icon_quiz7,
    alt: 'number7',
  },
];

function QuizIng() {
  const [quizScore, setQuizScore] = useState([]);
  const [score, setScore] = useRecoilState(scoreState);
  const [arrIdx, setArrIdx] = useState(0);
  const [quizList, setQuizList] = useState([]);
  const [correct, setCorrect] = useState();
  const [isModal, setisModal] = useState();
  const navigate = useNavigate();
  const scoreReset = useResetRecoilState(scoreState);

  console.log(score);

  const handleCheckAnswer = answer => {
    if (arrIdx === quizList.length - 1) {
      navigate('/quizEnd');
    }
    if (answer === quizList[arrIdx].answerId) {
      setScore(score + 1);
      setCorrect(true);
      setQuizScore(quizScore.concat(icon_correct));
    } else {
      setCorrect(false);
      setQuizScore(quizScore.concat(icon_error));
    }
    setArrIdx(arrIdx + 1);
    setisModal(true);
    console.log(score);
  };

  const handleClose = () => {
    scoreReset();
    navigate('/');
  };

  useEffect(() => {
    const handleGetQuizList = async () => {
      const response = await getQuizList();
      setQuizList(response.data.quiz);
    };

    handleGetQuizList();
  }, []);

  setTimeout(() => {
    setisModal(false);
  }, '1000');

  return (
    <>
      {isModal && <QuizModal correct={correct} />}
      <StQuizIngContainer>
        <StQuizHeaderWrapper>
          {quizScore.map(
            (quiz, idx) => quiz.length !== 0 && <StQuizIcon key={idx} src={quiz} alt="error" />
          )}
          <StQuizClose onClick={handleClose} src={icon_close} alt="close" />
        </StQuizHeaderWrapper>
        <StQuizItemContainer>
          <StQuizTitleWrapper>
            <StQuizNumber src={QUIZ_NUMBER[arrIdx].src} alt="quizNumber" />
            <StQuizTextWrapper>{quizList[arrIdx]?.question}</StQuizTextWrapper>
          </StQuizTitleWrapper>
          {arrIdx === 6 ? <StQuizImage src={image_quiz} /> : <StQuizWrapper />}
          <StQuizListWrapper>
            {quizList[arrIdx]?.examples?.map(example => (
              <StQuizItemButton onClick={() => handleCheckAnswer(example.id)} key={example.id}>
                {example.text}
              </StQuizItemButton>
            ))}
          </StQuizListWrapper>
        </StQuizItemContainer>
      </StQuizIngContainer>
    </>
  );
}

export default QuizIng;

const StQuizIngContainer = styled.div`
  width: 100%;
  padding: 7.9rem 3.5rem 8.4rem 3.5rem;
  position: relative;
`;
const StQuizHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
const StQuizIcon = styled.img`
  margin-right: 0.8rem;
`;
const StQuizClose = styled.img`
  position: absolute;
  left: 31.6rem;
`;

const StQuizNumber = styled.img`
  position: absolute;
  top: 11.5rem;
  left: 3.5rem;
`;
const StQuizItemContainer = styled.div``;
const StQuizTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const StQuizTextWrapper = styled.div`
  width: 20rem;
  position: absolute;
  top: 15.8rem;
  left: 3.5rem;
  font-size: ${theme.fontSize.heading4};
  font-weight: ${theme.fontWeight.medium};
  margin-top: 0.7rem;
  line-height: 140%;
`;

const StQuizImage = styled.img`
  position: absolute;
  top: 33.3rem;
  left: 3.3rem;
`;

const StQuizWrapper = styled.div`
  position: absolute;
  top: 33.3rem;
  left: 3.3rem;
`;
const StQuizListWrapper = styled.div`
  position: absolute;
  top: 52.5rem;
  left: 3.5rem;
  display: flex;
  flex-direction: column;
`;
const StQuizItemButton = styled.button`
  width: 30.5rem;
  height: 5.5rem;
  font-size: ${theme.fontSize.heading5};
  font-weight: ${theme.fontWeight.medium};
  border: 1px solid ${theme.colors.grey200};
  background-color: ${theme.colors.grey100};
  border-radius: ${theme.radius.radius};

  & + & {
    margin-top: 2rem;
  }
`;
