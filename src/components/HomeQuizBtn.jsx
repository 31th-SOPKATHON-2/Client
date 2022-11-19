import styled from 'styled-components';
import { theme } from '../styles/theme.js';
import { Link } from 'react-router-dom';

export default function HomeQuizBtn() {
  return (
    <Link to="/quizstart">
      <StQuizBtn>잼민 QUIZ 풀러가기 &gt; </StQuizBtn>
    </Link>
  );
}

const StQuizBtn = styled.button`
  width: 16rem;
  height: 2.5rem;

  background-color: transparent;

  color: ${theme.colors.jemminiBlue};
  font-size: ${theme.fontSize.heading5};
  font-weight: ${theme.fontWeight.medium};

  position: absolute;
  left: 107px;
  top: 723px;
`;
