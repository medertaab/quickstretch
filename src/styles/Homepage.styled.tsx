import styled from "styled-components";

const HomePageStyled = styled.div`
  width: 80%;
  text-align: center;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    margin: 0;
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
    gap: 1rem;
    max-width: max-content;
    justify-content: center;
  }
  
  @media (width < 600px) {
    margin-top: 2rem;
  }
`;

export default HomePageStyled