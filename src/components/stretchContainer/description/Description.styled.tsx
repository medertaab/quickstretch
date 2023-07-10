import styled from "styled-components";

export const DescriptionStyled = styled.div<{ status: String }>`
  max-width: 80%;
  margin-top: 0.1rem;

  p {
    font-size: 0.8rem;
    opacity: 80%;
  }

  h2 {
    font-size: 1.7rem;
    font-weight: 700;
  }

  @media (max-width: 600px) {
    max-width: 100%;

    p {
      padding: 0.5rem 0 1rem 0;
      display: ${(props: any) => props.status !== "off" && "none"};
    }
  }
`;
