import { useEffect } from "react";
import Header from "./Header";
import styled from "styled-components";
import checkAllStreks from "../../utils/checkStreaks";
import { Outlet } from "react-router-dom";
import Background from "./Background";

export default function PageLayout({ children }: any) {
  useEffect(() => {
    checkAllStreks();
  }, []);

  return (
    <>
      <PageLayoutStyled className="page">
        <Header />
        <Outlet />
        <Background />
      </PageLayoutStyled>
    </>
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
  animation: fade-in 0.125s ease-in;
`;
