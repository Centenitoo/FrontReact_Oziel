import React from 'react';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import ComicList from './ComicList';
import {Informacion, Imagen, Alumno} from './Inicio';
import CreateComics from './CreateComic';
import Login from './Login'
import Textdavinci003 from './text-davinci-003';
import ServiceDavinci003 from '../services/text-davinci-003/service.davinci-003';
import ImgIA from './img.front';

const App = () => {
  return (
    <div >
      <Header />
      <Imagen />
      <Informacion/> 
        <Routes>
          <Route path="/" element = { <Alumno />}/>
          <Route path="/List" element={<ComicList/>} />
          <Route path="/create" element={<CreateComics/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/text-davinci-003" element={<Textdavinci003/>} />
          <Route path="/service.davinci-003" element={<ServiceDavinci003/>} />
          <Route path="/imagenia" element={<ImgIA/>} />
        </Routes>
      </div>
  );
};
export default App;