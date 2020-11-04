import React, {FC} from 'react';
import styled from "styled-components";
import {Image} from "../Image";
import {down} from "styled-breakpoints";

export interface Photo {
  id: string;
  src: url;
  title: string;

}

export interface GalleryProps {
  photos: Photo[];
}

export const Gallery: FC<GalleryProps> = (props) => {
  return (
    <StyledGallery>
      {props.photos.map(({id, src, title}) => (
        <Image key={id} title={title} src={src} onClick={() => {}}/>
      ))}
    </StyledGallery>
  )
}

const StyledGallery = styled.section`
  column-count: 5;
  column-gap: 0.1em;
  row-gap: 0;
  ${down('lg')} {
    column-count: 4;
  }
  ${down('md')} {
    column-count: 3;
  }
  ${down('sm')} {
    column-count: 1;
  }
`
