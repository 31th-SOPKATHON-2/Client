import styled from 'styled-components';
import { theme } from '../styles/theme.js';
import homeLogo from '../assets/image/homeLogo.svg';

export default function HomeHeader() {
  return (
    <HomeHeaderContainer>
      <HomeHeaderImage src={homeLogo} alt="로고" />
      <HomeHeaderDesc>세상 모든 잼민어를 여기서 찾아보세요</HomeHeaderDesc>
    </HomeHeaderContainer>
  );
}

const HomeHeaderContainer = styled.div`
  width: 22.9rem;
  height: 22.3rem;

  margin-top: 6.1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HomeHeaderImage = styled.img`
  width: 20rem;
  height: 20rem;
`;

const HomeHeaderDesc = styled.div`
  height: 2.3rem;

  color: ${theme.colors.grey500};
  font-size: ${theme.fontSize.body2};
  font-weight: ${theme.fontWeight.body2};
`;
