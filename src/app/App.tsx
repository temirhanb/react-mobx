import React from "react";
import { Route, Routes ,BrowserRouter as Router} from "react-router-dom";

import { FavoritesPage, MainPage, NotFoundPage, PeoplesPage, SingleActor } from "../pages";
import { Header } from "../widgets";
import './index.css';

export const App:React.FC =()=> {

  return (
    <div className="flex flex-col">
      <Routes>
        <Route path={'/'} element={<Header/>}>
          <Route path={'/'} element={<MainPage/>}/>
          <Route path={'/favorites'} element={<FavoritesPage/>}/>
          <Route path={'/peoples'} element={<PeoplesPage/>}/>
          <Route path={'/peoples/:id'} element={<SingleActor/>}/>
          <Route path={'*'} element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}
