import React, { Component } from 'react'

import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

import { Form } from 'formsy-react'
import EmailField from './form/EmailField'
import PasswordField from './form/PasswordField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { grey500 } from 'material-ui/styles/colors'

import {FormsySelect } from 'formsy-material-ui/lib'

const actionsForSelect = [
  <MenuItem key={1} value={1} primaryText="phone call" />,
  <MenuItem key={2} value={2} primaryText="email" />,
  <MenuItem key={3} value={3} primaryText="letter" />,
  <MenuItem key={4} value={4} primaryText="demonstration" />,
  <MenuItem key={5} value={5} primaryText="town hall" />,
  <MenuItem key={6} value={6} primaryText="office" />
]

const issuesForSelect = [
  <MenuItem key={1} value={1} primaryText="health care" />,
  <MenuItem key={2} value={2} primaryText="immigration" />,
  <MenuItem key={3} value={3} primaryText="voting rights" />
]

const officialInfoStyle = {
  fontSize: '14px',
  fontWeight: 500,
  color: grey500
}

class LogActionModal extends Component {

  constructor (props) {
    super(props)

    if (this.canSetState()) {
      this.setState({
        form: {},
        canSubmit: false
      })
    }
  }

  canSetState = () => {
    return this.refs.logActionModal
  }

  setForm = (form) => {
    if (this.canSetState()) {
      this.setState({
        form: form
      })
    }
  }

  submit = () => {
    this.props.handleSubmit(
      this.state.form,
      this.props.official,
      this.props.auth
    )
  }

  handleValid = () => {
    if (this.canSetState()) {
      this.setState({
        canSubmit: true
      })
    }
  }

  handleInvalid = () => {
    if (this.canSetState()) {
      this.setState({
        canSubmit: false
      })
    }
  }

  cancelButton = () => {
    return (
      <FlatButton label="Cancel" onTouchTap={this.props.handleCancel} />
    )
  }

  submitButton = () => {
    return (
      <FlatButton
          label="Submit"
          onTouchTap={this.submit}
          disabled={!this.state || !this.state.canSubmit}
      />
    )
  }

  actionsForSelect = () => {
    return (
      this.props.actionList.map((action) => {
        return (
          <MenuItem
              key={action.id}
              value={action.id}
              primaryText={action.name}
          />
        )
      })
    )
  }

  issuesForSelect = () => {
    return (
      this.props.issueList.map((issue) => {
        return (
          <MenuItem
              key={issue.id}
              value={issue.id}
              primaryText={issue.name}
          />
        )
      })
    )
  }

  render () {
    if (!this.props.official) {
      return null
    }

    return (
      <div ref="logActionModal">
        <Dialog
            title={
              <div>
                LOG ACTION
                <div style={officialInfoStyle}>
                  {this.props.official.name}, {this.props.official.office.name}
                </div>
              </div>
            }
            actions={[this.cancelButton(), this.submitButton()]}
            modal={false}
            open={this.props.isOpen}
            autoScrollBodyContent={true}
            onRequestClose={this.props.handleCancel}
        >

        <Form
            onValid={this.handleValid}
            onInvalid={this.handleInvalid}
            onValidSubmit={() => {}}
            onInvalidSubmit={() => {}}
            validationErrors={{}}
            onChange={this.setForm}
        >
          <FormsySelect
              floatingLabelText="Action"
              name="actionId"
              required
          >
            {this.actionsForSelect()}
          </FormsySelect><br />
          <FormsySelect
              floatingLabelText="Issue"
              name="issueId"
              required
          >
            {this.issuesForSelect()}
          </FormsySelect>

        </Form>
        </Dialog>
      </div>
    )
  }
}

export default LogActionModal
