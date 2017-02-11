import React, { PropTypes } from 'react'
import {
  Card,
  CardActions,
  CardHeader,
  CardTitle,
  CardText
} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const memberCardStyles = {
  height: '285px',
  marginBottom: '20px'
}

const MemberCard = ({ onClick, completed, member }) => {
  return (
    <Card style={memberCardStyles}>
      <CardHeader
        title={member.first_name + ' ' + member.last_name}
        subtitle={member.chamber}
        avatar=""
        titleColor={completed ? 'red' : 'black'}
      />

      <CardTitle title={member.phone} subtitle={member.oc_email} />

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
