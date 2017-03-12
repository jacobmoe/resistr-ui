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

import OfficialCardContact from './OfficialCardContact'
import LogActionModal from './LogActionModal'

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
    super(props)

    this.avatarAttemptCount = 0

    this.state = {
      modalOpen: false
    }
  }

  onAvatarError = (e) => {
    if (this.avatarAttemptCount++ < maxAvatarAttemptCount) {
      e.target.src=defaultImage
    }
  }

  handleLogActionTap = () => {
    if (this.props.loggedIn) {
      this.setState({
        modalOpen: true
      })
    } else {
      this.props.openDrawer()
    }
  }

  closeLogActionModal = () => {
    this.setState({
      modalOpen: false
    })
  }

  render () {
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

        <LogActionModal
            isOpen={this.state.modalOpen}
            handleCancel={this.closeLogActionModal}
            handleSubmit={this.props.submit}
            clearErrors={this.props.clearLogActionErrors}
            errors={this.props.userActionErrors}
            official={this.props.official}
            office={this.props.office}
        />
      </div>
    )
  }
}

export default OfficialCard
