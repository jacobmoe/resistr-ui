import React, { Component } from 'react'

import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import Popover from 'material-ui/Popover'
import Subheader from 'material-ui/Subheader'
import ActionIcon from './ActionIcon'

class ActionIssuesInfo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      popoverOpen: false
    }
  }

  openPopover = (event) => {
    event.preventDefault();

    this.setState({
      popoverOpen: true,
      anchorEl: event.currentTarget,
    })
  }

  closePopover = () => {
    this.setState({
      popoverOpen: false,
    })
  }

  handleMouseLeave = () => {
    setTimeout(this.closePopover, 4000)
  }

  render () {
    const issues = this.props.actionInfo.issues

    return (
      <span>
        <Popover
          open={this.state.popoverOpen}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.closePopover}
        >
          <Menu>
            <Subheader>{this.props.actionName}</Subheader>
            {Object.keys(issues).map((issueName) => {
              return (
                <MenuItem 
                  key={issueName}
                  style={{minWidth: '150px'}}
                  primaryText={issueName} 
                  secondaryText={issues[issueName].toString()} />
              )
            })}
          </Menu>
        </Popover>

        <span 
          onMouseEnter={this.openPopover} 
          onMouseLeave={this.handleMouseLeave}
        >

          <ActionIcon 
            iconName={this.props.actionInfo.iconName} 
            count={this.props.actionInfo.count} />
        </span>
      </span>
    )
  }
}

export default ActionIssuesInfo