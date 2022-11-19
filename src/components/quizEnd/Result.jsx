import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

function Result({ resultList }) {
  const [score, setScore] = useState(0);
  const { img, title, desctitle, descvalue1, descvalue2 } = resultList[score];
  let result = 7;

  useEffect(() => {
    handleScore();
  }, []);

  const handleScore = () => {
    if (result === 0) {
      setScore(3);
    } else if (result > 0 && result < 4) {
      setScore(2);
    } else if (result > 3 && result < 7) {
      setScore(1);
    } else {
      setScore(0);
    }
  };

  return (
    <StResultContainer>
      <h1>당신의 정신연령은</h1>
      <StResultImg src={img} alt="결과이미지" />
      <StResultTitle src={title} alt="결과타이틀" />
      <span>{desctitle}</span>
      <StDescriptionContainer>
        <h2>잼민이 Type 설명</h2>
        <p>{descvalue1}</p>
        <p>{descvalue2}</p>
      </StDescriptionContainer>
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
