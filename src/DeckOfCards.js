import { useState, useEffect } from "react";
import Card from './Card';
import Button from './Button';
import axios from 'axios';

const DECK_CARDS_API_URL = "https://deckofcardsapi.com/api";

/** DeckOfCards
 *
 * Props: none
 *
 * State:
 *  - deck: deck of cards from API - { isLoaded, data, error }
 * // TODO: ADD 2nd piece of state, update isloading
 *
 * Effects:
 * - fetchDeckWhenMounted
 *
 * App --> DeckOfCards --> Card
 * App --> DeckOfCards --> Button
 */

function DeckOfCards() {
  const initialDeck = {
    isLoading: true,
    data: null,
    errors: null
  };
  const [deck, setDeck] = useState(initialDeck);
  const [card, setCard] = useState(null);

  console.debug("DeckOfCards ran, deck = ", deck);

  // FIXME: add docstring
  useEffect(function fetchDeckWhenMounted() {
    // FIXME: add docstring
    async function fetchDeck() {
      try {
        const response = await axios.get(`${DECK_CARDS_API_URL}/deck/new/`);
        setDeck({
          data: response.data,
          isLoading: false,
          errors: null,
        });
      } catch (err) {
        setDeck({
          data: null,
          isLoading: false,
          errors: err,
        });
      }
    }
    fetchDeck();
  }, []);

// FIXME:ADD DOCSTRING -- add params into axios get
  async function drawCard() {
    const response = await axios.get(
      `${DECK_CARDS_API_URL}/deck/${deck.data.deck_id}/draw/?count=1`
    );

    const { image, code } = response.data.cards[0];
    const remaining = response.data.remaining;
    const card = { image, code, remaining };

    setCard(card);
  }

  if (deck.isLoading) return <i>Loading...</i>;
  else if (deck.errors) return <b>Oh no! {deck.errors}</b>;
  return (
    <div className="DeckOfCards">
      {card !== null && card?.remaining > 0
        ?
        <div>
          <Button drawCard={drawCard} />
          <Card image={card.image} code={card.code} />
        </div>
        :
        <Button drawCard={drawCard} />
      }
      {card?.remaining === 0 &&
        <p style={{ color: "red" }}>Error: no cards remaining!</p>
      }
    </div>
  );

}


export default DeckOfCards;