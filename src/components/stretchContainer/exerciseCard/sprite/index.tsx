import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function Sprite(props: any) {
  const { data, speed } = props;
  const [spriteIndex, setSpriteIndex] = useState(0);
  const sprite = data?.images[spriteIndex];

  let spriteRef: any = useRef(null);

  useEffect(() => {
    if (data) {
      spriteRef = setTimeout(() => {
        if (spriteIndex >= data.images.length - 1) {
          setSpriteIndex(0);
        } else {
          setSpriteIndex((prev) => prev + 1);
        }
      }, speed);
    } else {
      clearInterval(spriteRef);
    }
  }, [data, spriteIndex]);

  if (!sprite)
    return (
      <SpriteContainer>
        <SpriteImage
          src="/neck_stretch/leftandright/1.png"
          height={200}
          alt="Execising bunny idle"
        ></SpriteImage>
      </SpriteContainer>
    );

  if (sprite)
    return (
      <SpriteContainer>
        {data.images.map((image: string, index: number) => {
          return (
            <SpriteImage
              src={image}
              key={index}
              alt={`${data.title} demonstration`}
              style={{ opacity: index === spriteIndex ? "1" : "0" }}
            ></SpriteImage>
          );
        })}
      </SpriteContainer>
    );

  return <></>;
}

const SpriteContainer = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  height: var(--sprite-height);
  min-width: 10rem;
`;

const SpriteImage = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
`;
