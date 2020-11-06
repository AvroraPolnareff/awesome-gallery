import React, { FC } from "react";
import styled from "styled-components";

interface ImageProps {
  title: string;
  src: url;
  onClick: (id: string) => void;
}

export const Image: FC<ImageProps> = (props, key) => {
  return (
    <StyledImage onClick={() => props.onClick(key)}>
      <HoverContainer>
        <StyledImg src={props.src} />
        <Title>{props.title}</Title>
      </HoverContainer>
    </StyledImage>
  );
};

const StyledImage = styled.div`
  cursor: pointer;
  outline: none;
  position: relative;
  &:hover {
    user-select: text;
  }
  height: fit-content;
`;

const HoverContainer = styled.div`
  position: relative;
  &:after {
    position: absolute;
    content: " ";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.5s;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
    opacity: 0;
  }
  &:hover,
  &:focus {
    &:after {
      opacity: 1;
    }
    & > div {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.div`
  position: absolute;
  bottom: 0.5em;
  left: 0.5em;
  z-index: 2;
  user-select: none;
  opacity: inherit;
  color: transparent;
  transition: all 0.5s;
  & > span {
    text-overflow: ellipsis;
    width: 80%;
  }
`;
