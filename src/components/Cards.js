import React, { useContext } from "react";
import { SearchContext } from "../pages/App"
import "../styles/cards.css";

import Card from "./Card";

function Cards() {
  const { cards } = useContext(SearchContext);

  return (
    <div className="cards" >

      {
        cards.map((card, index) => {
          return <Card key={card.id}
            name={card.name}
            image={card.thumbnail}
            area={card.area}
            category={card.category}
            cookingInstructions={card.cookingInstructions}

          />
        })
      }

    </div>
  );
}


export default Cards;
