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
import ActionIssuesInfo from './ActionIssuesInfo'

const styles = {
  officialCard: {
    minWidth: '300px',
    marginBottom: '20px',
    textAlign: 'left',
    minHeight: '320px',
    position: 'relative'
  },
  action: {
    top: 'auto',
    left: 'auto',
    bottom: '10px',
    position: 'absolute',
    textAlign: 'right'
  },
  cardHeader: {
    // CardHeader has some right padding that 
    // caused the subtitle to overflow out of the container
    // causing a horizontal scroll on small screens
    overflow: 'hidden' 
  },
  actionIcons: {
    paddingLeft: '10px'
  }
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

    props.loadUserActions(props.official, props.userActionDisplaySettings)
    this.avatarAttemptCount = 0
  }

  componentWillReceiveProps(nextProps) {
    const currentSettings = this.props.userActionDisplaySettings
    const nextSettings = nextProps.userActionDisplaySettings

    // check if any settings have changed before pulling the trigger
    for (let key in currentSettings) {
      if (currentSettings[key] !== nextSettings[key]) {
        this.props.loadUserActions(this.props.official, nextSettings)
        break
      }
    }
  }

  // setting maxAvatarAttemptCount might be a bit paranoid, but if someone
  // deletes or renames the default image, we'd get an infinite loop
  onAvatarError = (e) => {
    if (this.avatarAttemptCount++ < maxAvatarAttemptCount) {
      e.target.src=defaultImage
    }
  }

  handleLogActionTap = () => {
    if (this.props.loggedIn) {
      this.props.setActiveOfficial( this.props.official)

      this.props.loadActions()
      this.props.loadIssues()

      this.props.openLogActionModal()
    } else {
      this.props.openDrawer()
    }
  }

  groupActionIssues (userActions) {
    if (!userActions) return null

    return userActions.reduce((acc, ua) => {
      acc[ua.action.name] = acc[ua.action.name] || {
        iconName: ua.action.iconName, 
        count: 0, 
        issues: {}
      }

      acc[ua.action.name].count++

      let issueCount = acc[ua.action.name].issues[ua.issue.name] || 0
      acc[ua.action.name].issues[ua.issue.name] = ++issueCount

      return acc
    }, {})
  }

  userActionsForOfficial = () => {
    return this.props.userActions[this.props.official.identifier]
  }

  render () {
    const userActions = this.userActionsForOfficial() || []
    const groupedActionIssueCounts = this.groupActionIssues(userActions)

    return (
      <div>
        <Card style={styles.officialCard}>
          <CardHeader
            style={{overflow: 'hidden'}}
            title={this.props.official.name}
            subtitle={this.props.official.office.name}
            avatar={
              <Avatar
                src={this.props.official.photoUrl || defaultImage}
                onError={this.onAvatarError}
              />
            }
          />

          <div style={styles.actionIcons}>
            {Object.keys(groupedActionIssueCounts).map((actionName) => {
              return (
                <ActionIssuesInfo 
                  key={actionName}
                  actionName={actionName} 
                  actionInfo={groupedActionIssueCounts[actionName]} />
              )
            })}
          </div>

          <CardText>
            <OfficialCardContact official={this.props.official} />
          </CardText>

          <CardActions style={styles.action}>
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
