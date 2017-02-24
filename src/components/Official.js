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

const officialCardStyles = {
  minWidth: '300px',
  marginBottom: '20px',
  marginLeft: '20px',
  textAlign: 'left',
  minHeight: '300px',
  position: 'relative'
}

const actionStyles = {
  top: 'auto',
  left: 'auto',
  bottom: '10px',
  position: 'absolute'
}

const partyLogoStyles = {
  float: 'right'
}

const partyImage = (member) => {
  if (member.party === 'Democratic') {
    return '/img/democratic_donkey.png'
  } else if (member.party === 'Republican') {
    return '/img/republican_elephant.png'
  } else {
    return null
  }
}

const Official = ({ official, office }) => {
  return (
    <Card style={officialCardStyles}>
      <CardHeader
        title={official.name}
        subtitle={office.name}
        avatar={official.photoUrl}
      />

      <CardText>
        {official.phones}
        {official.officeAddress}
      </CardText>

      <CardText>
        {official.officeAddress}
      </CardText>

      <CardActions style={actionStyles}>
        <Avatar
            src={partyImage(official)}
            style={partyLogoStyles}
        />

        <FlatButton label="Register Call" />
      </CardActions>
    </Card>
  )
}

export default Official
