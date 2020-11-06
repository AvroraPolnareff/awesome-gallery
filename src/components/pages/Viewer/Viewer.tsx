import React, { FC, useMemo, useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import { RootState } from "../../../app/rootReducer";

export const Viewer: FC = () => {
  const history = useHistory();
  const { albumId, photoId } = useParams<{
    albumId: string;
    photoId: string;
  }>();

  const currentAlbum = useSelector((state: RootState) =>
    state.albums.albums.find((album) => album.id === parseInt(albumId, 10)),
  );

  const { prevPhoto, currentPhoto, nextPhoto } = useMemo(() => {
    if (!currentAlbum)
      return {
        prevPhoto: null,
        currentPhoto: null,
        nextPhoto: null,
      };
    const photos = currentAlbum.photos;
    const currentPhoto = photos.find(
      (photo) => photo.id === parseInt(photoId, 10),
    );

    const index = photos.indexOf(currentPhoto!);
    return {
      prevPhoto: photos[index - 1] ?? null,
      currentPhoto,
      nextPhoto: photos[index + 1] ?? null,
    };
  }, [currentAlbum, photoId]);

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    history.push(`/albums/${currentAlbum!.id}/photos/`);
  };

  return (
    <StyledViewer onClick={handleBackgroundClick}>
      {currentAlbum && currentPhoto && (
        <Modal>
          <Image src={currentPhoto.url} />
          <Controls>
            {prevPhoto ? (
              <NavigationButton
                onClick={(e) => {
                  e.stopPropagation();
                  history.push(
                    `/albums/${currentAlbum.id}/photos/${prevPhoto.id}`,
                  );
                }}
              >
                {"<"}
              </NavigationButton>
            ) : (
              <div />
            )}
            {nextPhoto && (
              <NavigationButton
                onClick={(e) => {
                  e.stopPropagation();
                  history.push(
                    `/albums/${currentAlbum.id}/photos/${nextPhoto.id}`,
                  );
                }}
              >
                {">"}
              </NavigationButton>
            )}
          </Controls>
        </Modal>
      )}
    </StyledViewer>
  );
};

const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledViewer = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(40, 44, 52, 0.8);
`;

const Image = styled.img`
  max-height: 100%;
  width: auto;
`;

const Controls = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  justify-content: space-between;
  align-items: center;
`;

const NavigationButton = styled.button`
  margin: 1em;
  height: 2em;
  width: 2em;
  border-radius: 50%;
  border: none;
  background-color: rgba(40, 44, 52, 0.7);
  color: rgba(134, 141, 151, 0.8);
  font-weight: 700;
  font-size: 3rem;
  transition: background-color 0.2s linear;
  &:hover {
    background-color: rgba(40, 44, 52, 0.9);
  }
`;
