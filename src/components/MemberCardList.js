import React, { PropTypes } from 'react'
import MemberCard from './MemberCard'
const {Grid, Row, Col} = require('react-flexbox-grid')

const MemberCardList = ({ members, onMemberCardClick }) => {
  let count = 0
  return (
    <Grid>
      <Row>
        {members.map(member =>
          <Col xs={12} sm={6} md={3} key={count++}>
            <MemberCard
              member={member}
              onClick={() => onMemberCardClick(count++)}
            />
          </Col>
        )}
      </Row>
    </Grid>
  )
}

MemberCardList.propTypes = {
  members: PropTypes.arrayOf(PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    complete: PropTypes.bool
  }).isRequired).isRequired,
  onMemberCardClick: PropTypes.func.isRequired
}

export default MemberCardList
