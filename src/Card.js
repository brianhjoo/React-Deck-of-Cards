
/** Card
 *
 * Props:
 *  - imgUrl: url for img src
 *  - code: card code to use in img alt
 *
 * State: none
 *
 * App --> DeckOfCards --> Card
 */
function Card({ image, code }) {
  return <img src={image} alt={code} />;
}


export default Card;