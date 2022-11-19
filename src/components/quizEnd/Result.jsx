import styled from 'styled-components';
import { theme } from '../../styles/theme';

function Result() {
  return (
    <StResultContainer>
      <h1>당신의 정신연령은</h1>
      <div></div>
    </StResultContainer>
  );
}

export default Result;

const StResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 2.4rem;

    font-weight: ${theme.fontWeight.medium};
    font-size: ${theme.fontSize.heading4};
    line-height: 140%;
  }

  div {
    width: 20rem;
    height: 20rem;
    background-color: ${theme.colors.jemminiBlue};
  }
`;
