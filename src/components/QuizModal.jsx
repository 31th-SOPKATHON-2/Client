import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import image_correct from '../assets/image/image_correct.svg';
import image_error from '../assets/image/image_error.svg';

function QuizModal({ correct }) {
  return (
    <StModalContainer>
      <StModalWrapper>
        {correct ? (
          <>
            <StModalImage src={image_correct} alt="image" />
            <StModalTopText>정답!</StModalTopText>
            <StModalBottomText>좀 치네?ㅋ</StModalBottomText>
          </>
        ) : (
          <>
            <StModalImage src={image_error} alt="image" />
            <StModalTopText>땡~!</StModalTopText>
            <StModalBottomText>ㅋㅋ</StModalBottomText>
          </>
        )}
      </StModalWrapper>
    </StModalContainer>
  );
}

export default QuizModal;

const StModalContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: ${theme.colors.grey200};
  z-index: 100;
  opacity: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StModalImage = styled.img`
  margin-bottom: 2.4rem;
`;
const StModalTopText = styled.span`
  font-size: ${theme.fontSize.heading1};
  font-weight: ${theme.fontWeight.light};
`;
const StModalBottomText = styled.span`
  margin-top: 0.5rem;
  font-size: ${theme.fontSize.body1};
  font-weight: ${theme.fontWeight.light};
`;
