import Categories from "./Containers/Categories/Categories";
import Header from "./Containers/Header/Header";
import DishesList from "./Containers/DishesList/DishesList";
import { useSelector } from "react-redux";
import { RootState } from "./Redux/Store";
import ModalOverlay from "./Containers/Modal/ModalCart";
import { useState } from "react";


function App() {
    const selectedCategory = useSelector(
        (state: RootState) => state.categories.item.category
    );
    const displayDishes = useSelector(
        (state: RootState) => state.categories.item.display
    );

    const [displayModal, setDisplayModal] = useState(false);
    function seeModal(){
        setDisplayModal(true);
    }

    function closeModal(){
        setDisplayModal(false)
    }

    return (
        <div className="App">
          {displayModal && <ModalOverlay onCloseModal={closeModal}/> }
            <Header onCartClick={seeModal} />
            <Categories />
            {displayDishes && (
                <DishesList category={selectedCategory}></DishesList>
            )}
        </div>
    );
}

export default App;
