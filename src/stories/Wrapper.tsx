import React, {FC} from "react";
import 'normalize.css';
import '../index.css'
import {ThemeProvider} from "styled-components";
import {theme} from "../themes";

export const Wrapper: FC = ({children}) => (
  <>
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </>)
