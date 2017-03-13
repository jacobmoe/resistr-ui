import React, { Component } from 'react'

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
import ActionHome from 'material-ui/svg-icons/action/home'

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

class OfficialCard extends Component {

  constructor (props) {
    props.official.identifier = [
      props.office.divisionId,
      props.office.name,
      props.official.name
    ].join('_')

    super(props)

    props.loadUserActions(props.office, props.official)
    this.avatarAttemptCount = 0
  }

  onAvatarError = (e) => {
    if (this.avatarAttemptCount++ < maxAvatarAttemptCount) {
      e.target.src=defaultImage
    }
  }

  handleLogActionTap = () => {
    if (this.props.loggedIn) {
      this.props.setActiveOfficial(
        this.props.official,
        this.props.office,
        this.props.division
      )

      this.props.loadActions()
      this.props.loadIssues()

      this.props.openLogActionModal()
    } else {
      this.props.openDrawer()
    }
  }

  userActionsForOfficial = () => {
    return this.props.userActions[this.props.official.identifier]
  }

  render () {
    const userActions = this.userActionsForOfficial() || []

    return (
      <div>
        <Card style={officialCardStyles}>
          <CardHeader
            title={this.props.official.name}
            subtitle={this.props.office.name}
            avatar={
              <Avatar
                src={this.props.official.photoUrl || defaultImage}
                onError={this.onAvatarError}
              />
            }
          />

          <div style={{marginLeft: '20px'}}>
            {userActions.map((userAction) => {
              return <ActionHome key={userAction.id} />
            })}
          </div>

          <CardText>
            <OfficialCardContact official={this.props.official} />
          </CardText>

          <CardActions style={actionStyles}>
          <FlatButton
          onTouchTap={this.handleLogActionTap}
                label="Log Action"
                labelPosition="after"
                primary={true}
                icon={<ActionPhone />}
            />

            <FlatButton icon={
              <Avatar
                style={{backgroundColor: white}}
                src={partyImage(this.props.official)}
              />

            } />
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default OfficialCard
