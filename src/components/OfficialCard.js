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
import { grey900, white } from 'material-ui/styles/colors'

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
    return '/img/democratic-donkey.png'
  } else if (member.party === 'Republican') {
    return '/img/republican-elephant.png'
  } else {
    return null
  }
}

const defaultImage = '/img/us-flag.png'
const maxAvatarAttemptCount = 10

const OfficialCard = ({ official, office }) => {
  let avatarAttemptCount = 0

  const onAvatarError = (e) => {
    if (avatarAttemptCount++ < maxAvatarAttemptCount) {
      e.target.src=defaultImage
    }
  }

  return (
    <Card style={officialCardStyles}>
      <CardHeader
        title={official.name}
        subtitle={office.name}
        avatar={
          <Avatar
            src={official.photoUrl || defaultImage}
            onError={onAvatarError}
          />
        }
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
            style={{backgroundColor: white}}
            src={partyImage(official)}
          />

        } />
      </CardActions>
    </Card>
  )
}

export default OfficialCard
