
import Categories from './Containers/Categories/Categories';
import Header from './components/Header/Header';
import DishesList from './Containers/DishesList/DishesList';
import { useSelector } from 'react-redux';
import { RootState } from './Redux/categoryStore';




function App() {
 const selectedCategory = useSelector((state: RootState) => state.categories.item).category;
 const displayDishes = useSelector((state: RootState) => state.categories.item).display;

  return (
    <div className="App">
      <Header />
      <Categories />
      {displayDishes && <DishesList category={selectedCategory}></DishesList>}
    </div>
  );
}

export default App;
