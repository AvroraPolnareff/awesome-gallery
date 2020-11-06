import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { AlbumCard } from "../../shared/AlbumCard";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/rootReducer";
import { fetchAlbums } from "../../../store/albumsSlice";
import { Link } from "react-router-dom";

export const AlbumsGallery: FC = () => {
  const { albums, error } = useSelector((state: RootState) => state.albums);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlbums());
  }, [dispatch]);

  return (
    <StyledAlbumsGallery>
      {!error ? (
        albums.map(({ id: albumId, title, photos }) => (
          <StyledLink
            key={albumId}
            to={`/albums/${albumId}/photos`}
            style={{ textDecoration: "none" }}
          >
            <AlbumCard
              title={title}
              cover={photos[0].url}
              count={photos.length}
            />
          </StyledLink>
        ))
      ) : (
        <div>
          <h1>Error! Something went wrong.</h1>
        </div>
      )}
    </StyledAlbumsGallery>
  );
};

const StyledAlbumsGallery = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
  justify-items: center;
  grid-row-gap: 0.6em;
`;

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: ${({theme}) => theme.colors.black};
    }
`;
