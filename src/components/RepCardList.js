import React, { PropTypes } from 'react'
import RepCard from './RepCard'
const {Grid, Row, Col} = require('react-flexbox-grid')

const RepCardList = ({ cards, onRepCardClick }) => (
  <Grid>
    <Row>
      {cards.map(card =>
        <Col xs={6} md={3}>
          <RepCard
            key={card.id}
            {...card}
            onClick={() => onRepCardClick(card.id)}
          />
        </Col>
      )}
    </Row>
  </Grid>
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
