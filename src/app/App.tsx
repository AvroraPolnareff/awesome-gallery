import React, { useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import { AlbumsGallery } from "../components/pages/AlbumsGallery/AlbumsGallery";
import { Route, Switch, useLocation } from "react-router-dom";
import { Gallery } from "../components/pages/Gallery";
import { Viewer } from "../components/pages/Viewer";
import { useDispatch } from "react-redux";
import { fetchAlbums } from "../store/albumsSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAlbums());
  }, [dispatch]);
  const location = useLocation<{ background: Location }>();
  let background = location.state && location.state.background;
  return (
    <StyledApp>
      {/*@ts-ignore*/}
      <Switch location={background || location}>
        <Route exact path="/">
          <AlbumsGallery />
        </Route>
        <Route path={"/albums/:albumId/photos"}>{<Gallery />}</Route>
      </Switch>
      <Route path="/albums/:albumId/photos/:photoId" children={<Viewer />} />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  height: 100vh;
`;

export default App;
