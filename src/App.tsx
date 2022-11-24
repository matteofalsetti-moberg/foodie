import React, {useState} from 'react';
import Categories from './components/Categories/Categories';
import Header from './components/Header';
import DishesList from './components/Dishes/DishesList';




function App() {
  const [isFood, setIsFood] = useState(true);
  //const [categorySelected, setCategorySelected] = useState('none');


  return (
    <div className="App">
      <Header />
      <Categories />
      {isFood && <DishesList></DishesList>}
    </div>
  );
}

export default App;
