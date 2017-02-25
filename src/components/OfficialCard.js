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
import ActionPhone from 'material-ui/svg-icons/action/settings-phone'
import Paper from 'material-ui/Paper'

import OfficialCardContact from './OfficialCardContact'

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
  position: 'absolute',
  textAlign: 'right'
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

const OfficialCard = ({ official, office }) => {

  return (
    <Card style={officialCardStyles}>
      <CardHeader
        title={official.name}
        subtitle={office.name}
        avatar={official.photoUrl}
      />

      <CardText>
        <OfficialCardContact official={official} />
      </CardText>

      <CardActions style={actionStyles}>
        <FlatButton
            label="Log Action"
            labelPosition="after"
            primary={true}
            icon={<ActionPhone />}
        />

        <FlatButton icon={
          <Avatar
            style={{backgroundColor: '#fff'}}
            src={partyImage(official)} />
        } />
      </CardActions>
    </Card>
  )
}

export default OfficialCard
