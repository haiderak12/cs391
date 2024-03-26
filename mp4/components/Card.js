import styled from 'styled-components';

const CardWrapper = styled.div`
  align-content: center;
  background: lightGray;
  border-radius: 5px;
  margin-bottom: 2%;
  padding: 0.1vw 2vw 1vw 2vw;
`;

const Title = styled.h2`
  width: 100%;
  padding-bottom: 10px;
  text-align: center;
  border-bottom: 1px solid darkGray;
  color: black;
`;

const CardField = styled.div`
`;

const CountDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  border-bottom: 1px solid darkgray;
  padding-bottom: 10px;
`;

const StyledSpan = styled.span`
  color: gray;
  display: flex;
  padding: 0.3vw;
`;

const ProfileDiv = styled.div`
  text-align: left;
  padding-top: 1vw;
`;

const ImageField = styled.img`
  max-width: 5vw;
  padding: 0.5vw;
`;

function Card({ title, views, answers, score, link, username, rep, userimage }) {
  return (
    <CardWrapper>
        <Title>{title}</Title>
        <CardField>
            <CountDiv>
                <StyledSpan>{`Views: ${views}`}</StyledSpan>
                <StyledSpan>{`Answers: ${answers}`}</StyledSpan>
                <StyledSpan>{`Score: ${score}`}</StyledSpan>
            </CountDiv>
            <ProfileDiv>
                <ImageField src={userimage} alt="profile image" />
                <StyledSpan>{`User: ${username}`}</StyledSpan>
                <StyledSpan>{`Reputation: ${rep}`}</StyledSpan>
                <StyledSpan>{`Link: ${link}`}</StyledSpan>
            </ProfileDiv>
        </CardField>
    </CardWrapper>
  );
}

export default Card;
