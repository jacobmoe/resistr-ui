import React, { PropTypes } from 'react'
import {
  Card,
  CardActions,
  CardHeader,
  CardTitle,
  CardText,
} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const memberCardStyles = {
  marginBottom: '20px',
  textAlign: 'left'
}

const memberImage = (member) => {
  const domain = 'https://theunitedstates.io/images/congress/'
  const size = '225x275/'

  return domain + size + member.bioguide_id + ".jpg"
}

const MemberCard = ({ onClick, completed, member }) => {
  return (
    <Card style={memberCardStyles}>
      <CardHeader
        title={member.firstName + ' ' + member.lastName}
        subtitle={member.chamber}
        avatar={member.imageUrl}
        titleColor={completed ? 'red' : 'black'}
      />

      <CardTitle title={member.phone} subtitle={member.ocEmail} />

      <CardText>
        {member.office}
      </CardText>

      <CardActions>
        <FlatButton label="Called" onClick={onClick} />
      </CardActions>
    </Card>
  )
}

MemberCard.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool,
  member: PropTypes.shape({})
}

export default MemberCard
