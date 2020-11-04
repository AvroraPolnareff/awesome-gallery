import React, {FC, useMemo, useState} from 'react';
import styled from "styled-components";
import {Photo} from "../Gallery";

export interface ViewerProps {
  photos: Photo[]
  clickedPhoto: Photo
}

export const Viewer: FC<ViewerProps> = (props) => {
  const [currentPhoto, setCurrentPhoto] = useState<Photo|null>(null)
  const showingPhoto = useMemo(() => currentPhoto ?? props.clickedPhoto, [currentPhoto, props.clickedPhoto])

  const handleNavigation = () => {

  }

  return (
    <StyledViewer>
      <ImageContainer>
        <Image src={showingPhoto.src}/>
        <Controls>
          <Previous value={"<"}/>
          <Next value={">"}/>
        </Controls>
      </ImageContainer>
    </StyledViewer>
  )
}

const StyledViewer = styled.section`
  max-height: 100vh;
  width: 100%;
  position: fixed;
  background-color: rgba(40,44,52, 0.5);
`

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  
`

const Image = styled.img`
  max-height: 100%;
  width: auto;
`

const Controls = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  top: 0; left: 0;
  justify-content: space-between;
`

const Previous = styled.button`
  
`

const Next = styled.button`

`
