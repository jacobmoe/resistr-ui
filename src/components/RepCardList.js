import React, { PropTypes } from 'react'
import RepCard from './RepCard'
const {Grid, Row, Col} = require('react-flexbox-grid')

const RepCardList = ({ reps, onRepCardClick }) => {
  let count = 0
  return (
    <Grid>
      <Row>
        {reps.map(rep =>
          <Col xs={6} md={3} key={count++}>
            <RepCard
              rep={rep}
              onClick={() => onRepCardClick(count++)}
            />
          </Col>
        )}
      </Row>
    </Grid>
  )
}

RepCardList.propTypes = {
  reps: PropTypes.arrayOf(PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    complete: PropTypes.bool
  }).isRequired).isRequired,
  onRepCardClick: PropTypes.func.isRequired
}

export default RepCardList
