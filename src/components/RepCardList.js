import React, { PropTypes } from 'react'
import RepCard from './RepCard'

const RepCardList = ({ cards, onRepCardClick }) => (
  <ul>
    {cards.map(card =>
      <RepCard
        key={card.id}
        {...card}
        onClick={() => onRepCardClick(card.id)}
      />
    )}
  </ul>
)

RepCardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onRepCardClick: PropTypes.func.isRequired
}

export default RepCardList
