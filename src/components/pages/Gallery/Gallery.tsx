import React from "react";
import styled from "styled-components";
import { Image } from "../../shared/Image";
import { down } from "styled-breakpoints";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/rootReducer";

export const Gallery = () => {
  const { albumId } = useParams<{ albumId: string }>();
  const photos = useSelector((state: RootState) => {
    return state.albums.albums.find((album) => album.id === parseInt(albumId))
      ?.photos;
  });
  const location = useLocation<{ background: Location }>();
  const history = useHistory();

  return (
    <StyledGallery>
      <BackButton
        onClick={() => {
          history.push(`/`);
        }}
      >
        Back to Albums
      </BackButton>
      <AdaptiveGrid>
        {photos &&
          photos.map(({ id, url, title }) => (
            <Link
              to={{
                pathname: `/albums/${albumId}/photos/${id}`,
                state: { background: location },
              }}
              key={id}
            >
              <Image title={title} src={url} onClick={() => {}} />
            </Link>
          ))}
      </AdaptiveGrid>
    </StyledGallery>
  );
};

const StyledGallery = styled.section``;

const AdaptiveGrid = styled.section`
  column-count: 5;
  column-gap: 0.1em;
  row-gap: 0;
  ${down("lg")} {
    column-count: 4;
  }
  ${down("md")} {
    column-count: 3;
  }
  ${down("sm")} {
    column-count: 1;
  }
`;

const BackButton = styled.button`
  position: fixed;
  border-radius: 1em;
  left: 5%;
  top: 5%;
  z-index: 1;
  border: none;
  padding: 0.5em;
  text-transform: uppercase;
`;
