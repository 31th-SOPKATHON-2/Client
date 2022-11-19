import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { scoreState } from '../../core/atom';
import closeIcon from '../../assets/icon/icon_close.svg';
import { useNavigate } from 'react-router-dom';

function Result({ resultList }) {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const { img, title, desctitle, descvalue1, descvalue2 } = resultList[score];
  let quizResult = useRecoilValue(scoreState);
  const scoreReset = useResetRecoilState(scoreState);

  useEffect(() => {
    handleScore();
    console.log(quizResult);
  }, []);

  const handleScore = () => {
    if (quizResult === 7) {
      setScore(0);
    } else if (quizResult > 0 && quizResult < 4) {
      setScore(2);
    } else if (quizResult > 3 && quizResult < 7) {
      setScore(1);
    } else if (quizResult === 0) {
      setScore(3);
    }
  };

  const handleReset = () => {
    scoreReset();
    navigate('/quizIng');
  };

  const handleClose = () => {
    scoreReset();
    navigate('/');
  };

  return (
    <StResultContainer>
      <StCloseIcon src={closeIcon} alt="닫기버튼" onClick={handleClose} />
      <h1>당신의 정신연령은</h1>
      <StResultImg src={img} alt="결과이미지" />
      <StResultTitle src={title} alt="결과타이틀" />
      <span>{desctitle}</span>
      <StDescriptionContainer>
        <h2>잼민이 Type 설명</h2>
        <p>{descvalue1}</p>
        <p>{descvalue2}</p>
      </StDescriptionContainer>
      <StRestartBtn onClick={handleReset}>다시하기</StRestartBtn>
    </StResultContainer>
  );
}

export default Result;

const StResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h1 {
    margin-bottom: 2.4rem;

    font-weight: ${theme.fontWeight.medium};
    font-size: ${theme.fontSize.heading4};
    line-height: 140%;
  }

  & > span {
    margin-bottom: 1.6rem;

    font-weight: ${theme.fontWeight.light};
    font-size: ${theme.fontSize.body2};
    line-height: 150%;
  }
`;

const StCloseIcon = styled.img`
  margin: 7.4rem 3rem 5.4rem 32.1rem;
`;

const StResultImg = styled.img`
  margin-bottom: 1rem;

  width: 14.8rem;
  height: 14.8rem;
`;
const StResultTitle = styled.img`
  width: 26rem;
  height: 5rem;
`;

const StDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 8rem;

  & > h2 {
    margin-bottom: 1.6rem;

    color: ${theme.colors.black};
    font-weight: ${theme.fontWeight.medium};
    font-size: ${theme.fontSize.heading5};
  }

  & > p {
    text-align: center;
    font-weight: ${theme.fontWeight.light};
    font-size: ${theme.fontSize.body2};
    line-height: 150%;
  }
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
