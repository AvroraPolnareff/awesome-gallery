import React from 'react';

import './App.css';
import styled from "styled-components";
import {AlbumsGallery} from "./components/pages/AlbumsGallery";

function App() {
  return (
    <StyledApp>
      <Header>

      </Header>
      <AlbumsGallery albums={}/>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  height: 100vh;
`

const Header = styled.header`

`

export default App;
