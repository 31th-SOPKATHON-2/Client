import styled from 'styled-components';
import { useState } from 'react';
import { theme } from '../styles/theme.js';
import HomeHeader from '../components/HomeHeader.jsx';
import HomeSearchBtn from '../components/HomeSearchBtn.jsx';
import HomeQuizBtn from '../components/HomeQuizBtn.jsx';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState('');

  const handleChange = e => {
    setUserInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    navigate(`/result/${userInput}`);
    e.target.reset();
  };

  return (
    <StHomeContainer>
      <HomeHeader />
      <StHomeSearchContainer onChange={handleChange} onSubmit={handleSubmit}>
        <StHomeSearchInput placeholder="단어 입력하던지ㅋ" />
        <HomeSearchBtn onClick={handleSubmit} />
      </StHomeSearchContainer>

      <HomeQuizBtn type="button" />
    </StHomeContainer>
  );
}

export default Home;

const StHomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > h1 {
    color: ${theme.colors.jemminiBlue};
    font-weight: ${theme.fontWeight.medium};
    font-size: ${theme.fontSize.heading1};
  }
`;

const StHomeSearchContainer = styled.form`
  display: flex;

  margin-top: 3.1rem;
`;

const StHomeSearchInput = styled.input`
  padding: 1rem 9.8rem 0.9rem 1.7rem;
  height: 4.4rem;

  border: 2px solid ${theme.colors.grey200};

  border-radius: ${theme.radius.radius};
`;
