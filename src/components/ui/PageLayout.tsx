import React from "react";
import Header from "./Header";
import Background from "./Background";
import styled from "styled-components";

export default function PageLayout({ children }: any) {
  return (
    <PageLayoutStyled className="page">
      <Header />
      {children}
      <Background />
    </PageLayoutStyled>
  );
}

const PageLayoutStyled = styled.div`
  min-height: 100%;
  width: 100%;
  padding-top: 2rem;
  max-width: var(--max-screen);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
