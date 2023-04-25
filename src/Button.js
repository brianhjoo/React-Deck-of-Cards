
/** Button
 *
 * Props:
 *  - drawCard: parent will call function
 *
 * State: none
 *
 * App --> DeckOfCards --> Button
 */
function Button({ drawCard }) {
  return <button className='Button' onClick={drawCard}>Draw Card</button>;
}


export default Button;