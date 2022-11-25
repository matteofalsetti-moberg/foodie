import React, {useEffect, useState} from 'react';
import Categories from './components/Categories/Categories';
import Header from './components/Header';
import DishesList from './components/Dishes/DishesList';
import {useAppSelector} from "./components/features/hooks"




function App() {
 const selectedCategory = useAppSelector(state => state.categories.value).category;
 const displayDishes = useAppSelector(state => state.categories.value).display;

  return (
    <div className="App">
      <Header />
      <Categories />
      {displayDishes && <DishesList category={selectedCategory}></DishesList>}
    </div>
  );
}

export default App;
