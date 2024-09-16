import { useEffect } from "react";
import Header from "./Header";
import Background from "./Background";
import styled from "styled-components";
import checkAllStreks from "../../utils/checkStreaks";
import { useBg } from "../../hooks/BgContext";
import { useLocation } from "react-router-dom";

export default function PageLayout({ children }: any) {
  const { setIsHomepage } = useBg() as any;
  const inExercise = useLocation().pathname !== "/";

  useEffect(() => {
    if (inExercise) setIsHomepage(false);
    else setIsHomepage(true);

    checkAllStreks();
  }, []);

  return (
    <>
      <PageLayoutStyled className="page">
        <Header />
        {children}
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
