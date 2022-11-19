import styled from 'styled-components';
import { theme } from '../styles/theme.js';
import HomeHeader from './HomeHeader.jsx';
import HomeSearchBtn from './HomeSearchBtn.jsx';
import React, { useEffect, useState } from 'react';
import HomeQuizBtn from './HomeQuizBtn.jsx';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { sendUserInput } from '../libs/translateAPI.js';
import { useNavigate, useParams } from 'react-router-dom';

export default function HomeResult() {
  const { searchId } = useParams();
  const navigate = useNavigate();

  const [inputResponse, setInputResponse] = useState();
  const [isExist, setIsExist] = useState();
  const [inputValue, setInputValue] = useState(searchId);

  useEffect(() => {
    const handleSendUserInput = async () => {
      const response = await sendUserInput(searchId);
      setInputResponse(response);

      response.status === 200 ? setIsExist(true) : setIsExist(false);
    };
    handleSendUserInput();
  }, [searchId]);

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/result/${inputValue}`);
  };

  return (
    <StResultContainer>
      <HomeHeader />
      <StSearchedContainer onSubmit={handleSubmit}>
        <StSearchedWord value={inputValue} type="text" onChange={handleChange} />
        <HomeSearchBtn onClick={handleSubmit} />
      </StSearchedContainer>
      <HomeQuizBtn type="button" />

      {isExist ? (
        <>
          <StMeaningContainer>
            <StMeaingContainerTitle>"{inputResponse?.data?.input}"의 번역</StMeaingContainerTitle>
            <StMeaningOutput>{inputResponse?.data?.output?.result}</StMeaningOutput>
            <StMeaingOutputDesc>{inputResponse?.data?.output?.description}</StMeaingOutputDesc>
          </StMeaningContainer>
          <StExampleWrap>
            <CopyToClipboard
              text={inputResponse?.data?.output?.example}
              onCopy={() => alert('퍼가요~♡')}
            >
              <StExample>{inputResponse?.data?.output?.example}</StExample>
            </CopyToClipboard>
          </StExampleWrap>
          <StExampleMessage>예문 누르면 복사됌 ㅋ</StExampleMessage>
        </>
      ) : (
        <StNoResultMessage>물? 루?</StNoResultMessage>
      )}
    </StResultContainer>
  );
}

const StResultContainer = styled.div`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StSearchedContainer = styled.form`
  width: 30.5rem;

  margin-top: 3.1rem;
  display: flex;
`;

const StSearchedWord = styled.input`
  min-width: 25.3rem;
  padding-left: 1.7rem;
  height: 44px;

  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSize.heading5};

  border: 1px solid ${theme.colors.grey200};
  border-radius: ${theme.radius.radius};
`;

const StMeaningContainer = styled.div`
  margin-top: 2rem;

  width: 30.5rem;
  height: 12.6rem;

  border: 1px solid ${theme.colors.grey200};

  border-radius: ${theme.radius.radius};
`;

const StMeaingContainerTitle = styled.div`
  width: 76px;
  height: 18px;

  margin-left: 1.5rem;
  margin-top: 1.6rem;

  color: ${theme.colors.jemminiRed};

  font-size: ${theme.fontSize.description};
  font-weight: ${theme.fontWeight.light};
`;

const StMeaningOutput = styled.div`
  margin-left: 1.6rem;
  margin-top: 0.2rem;

  width: 100px;
  height: 28px;

  font-size: ${theme.fontSize.heading4};
  font-weight: ${theme.fontWeight.medium};
`;

const StMeaingOutputDesc = styled.div`
  margin-left: 1.5rem;
  margin-top: 1rem;

  width: 212px;
  height: 36px;

  font-size: ${theme.fontSize.description};
  font-weight: ${theme.fontWeight.light};

  line-height: 150%;
`;
const StExampleWrap = styled.div`
  margin-top: 1.2rem;

  width: 30.5rem;
  height: 4.4rem;

  display: flex;
  align-items: center;

  border: 1px solid ${theme.colors.jemminiBlue};

  border-radius: ${theme.radius.radius};
`;

const StExample = styled.div`
  width: 30.5rem;
  margin-left: 1.6rem;

  color: ${theme.colors.black};
  font-size: ${theme.fontSize.body1};
  font-weight: ${theme.fontWeight.light};
`;

const StExampleMessage = styled.div`
  margin-top: 0.8rem;

  color: ${theme.colors.jemminiBlue};
  font-size: ${theme.fontSize.description};

  font-weight: 400;
`;

const StNoResultMessage = styled.div`
  margin-top: 2rem;

  padding: 1.5rem 25.8rem 1.1rem 1.5rem;

  color: ${theme.colors.jemminiRed};

  border: 1px solid ${theme.colors.grey200};

  font-size: ${theme.fontSize.description};
  font-weight: ${theme.fontWeight.light};

  border-radius: ${theme.radius.radius};
`;
