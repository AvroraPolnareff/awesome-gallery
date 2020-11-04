import React, {FC} from 'react';
import styled from "styled-components";
import {AlbumCard} from "../shared/AlbumCard";

export interface Album {
  id: string;
  title: string;
  cover: url;
  photoCount: number;
}

export interface AlbumsGalleryProps {
  albums: Album[]
}

export const AlbumsGallery: FC<AlbumsGalleryProps> = (props) => {
  return(
    <StyledAlbumsGallery>
      {props.albums.map(({id, title, cover, photoCount}) => (
        <AlbumCard key={id} title={title} cover={cover} count={photoCount}/>
      ))}
    </StyledAlbumsGallery>
  )
}

const StyledAlbumsGallery = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  
  & > * + * {
    margin: 0.3em;
  }
`
