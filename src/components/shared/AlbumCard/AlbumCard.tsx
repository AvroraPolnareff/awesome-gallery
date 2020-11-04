import React, {FC} from "react";
import styled from "styled-components";


export interface AlbumCardProps {
  title: string;
  cover: url;
  count: number;
}

export const AlbumCard: FC<AlbumCardProps> = (props) => {
  return (
    <StyledAlbumCard>
      <Image src={props.cover} alt=""/>
      <Bottom>
        <Title>{props.title}</Title>
        <Info>
          <span>photos count: {props.count.toString()}</span>
        </Info>
      </Bottom>
    </StyledAlbumCard>
  )
}

const Image = styled.img`
  width: 100%;
  height: auto;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  object-fit: cover;
`

const StyledAlbumCard = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 20em;
  /*border: 1px solid ${({theme}) => theme.colors.borders};*/
  border-radius: 0.25em;
  
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    & > img {
      //transform: scale(1.05);
    }
  }
`

const Bottom = styled.div`
  padding: 0.5em;
`
const Title = styled.h2`
  margin: 0.2em auto;
`

const Info = styled.div`
  text-align: right;
`

