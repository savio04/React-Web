import React from 'react';
import GlobalStyles from './styles/GlobalStyles'

import Header from './components/Header/Header.jsx'
import Board from './components/Board/Board'

import { DndProvider } from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'

export default () => {
  return (
    <DndProvider backend = {HTML5Backend} >
      <Header />
      <Board />
      <GlobalStyles />
    </DndProvider>
  );
}
