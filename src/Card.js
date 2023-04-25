
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
function Card({ imgUrl, code }) {
  return <img src={imgUrl} alt={code} />
}


export default Card;