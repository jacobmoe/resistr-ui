import React, { PropTypes } from 'react'
import {
  Card,
  CardActions,
  CardHeader,
  CardTitle,
  CardText,
} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar'

const memberCardStyles = {
  marginBottom: '20px',
  textAlign: 'left'
}

const partyImage = (member) => {
  if (member.party === 'D') {
    return '/img/democratic_donkey.png'
  } else if (member.party === 'R') {
    return '/img/republican_elephant.png'
  } else {
    return null
  }
}

const MemberCard = ({ onClick, completed, member }) => {
  return (
    <Card style={memberCardStyles}>
      <CardHeader
        title={member.name}
        subtitle={member.chamber}
        avatar={member.imageUrl}
        titleColor={completed ? 'red' : 'black'}
      />

      <CardTitle title={member.phone} subtitle={member.ocEmail} />

      <CardText>
        {member.officeAddress}
      </CardText>

      <CardActions>
        <FlatButton label="Called" onClick={onClick} />
        <Avatar
            style={{float: 'right'}}
            src={partyImage(member)} />
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
