import React, { PropTypes } from 'react'
import MemberCard from './MemberCard'
import { Grid, Row, Col } from 'react-flexbox-grid'

const MemberCardList = ({ members, onMemberCardClick }) => {
  let count = 0
  return (
    <Grid>
      <Row>
        {members.map(member =>
          <Col
            key={count++}
            className="col-xs-12 col-sm-8 col-md-6 col-lg-4"
          >

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
