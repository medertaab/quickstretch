import styled from "styled-components";

const IndexPageStyled = styled.main`
  width: 80%;
  text-align: center;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    display: flex;
    align-items: center;
  }

  .logo img {
    height: 2rem;
    margin-right: 0.2rem;
    animation: shake-infinite 3s linear 1s infinite;
  }

  .description {
    margin: 0;
    font-size: 0.9rem;
    opacity: 70%;
  }

  .prompt {
    margin: 1rem auto 0 auto;
    font-size: 0.9rem;
    font-weight: 500;
  }

  .mode-list {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    gap: 1.5rem;
    max-width: max-content;
    justify-content: center;
  }
  
  @media (max-width: 600px) {
    margin: 2rem;
  }
`;

export default IndexPageStyled