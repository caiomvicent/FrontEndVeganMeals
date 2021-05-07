import React, { createContext, useState, useEffect } from "react";


import '../styles/App.css';
import '../styles/global.css'
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer'
import Cards from '../components/Cards'
import api from "../services/api"


export const SearchContext = createContext("");

function App() {
  const [inputSearch, setInputSearch] = useState("");
  const [allCards, setAllCards] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(async () => {
    const response = await api.get('/');
    setCards(response.data);
    setAllCards(response.data);
  }, []);


  useEffect(() => {
    const result = cards.filter((card) => {
      return (card.name.toUpperCase() === inputSearch.toUpperCase());
    });

    if (result.length > 0) {
      setCards(result);
    } else {
      setCards(allCards);
    }
  }, [inputSearch]);

  return (
    <div className="App">
      <SearchContext.Provider value={{ inputSearch, setInputSearch, cards }}>
        <Navigation />
        <main>
          <div className="container">
            <Cards />
          </div>
        </main>
      </SearchContext.Provider>
      <Footer />
    </div>
  );
}

export default App;

