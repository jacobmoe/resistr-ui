import React, { Component } from 'react'

import Subheader from 'material-ui/Subheader'
import Paper from 'material-ui/Paper'
import { Form } from 'formsy-react'

import RaisedButton from 'material-ui/RaisedButton'

const styles = {
  paperStyle: {
    width: 300,
    margin: 'auto',
    padding: 20,
    marginTop: 30
  },
  submitStyle: {
    marginTop: 32
  },
  headerStyle: {
    fontSize: 30,
    paddingLeft: 0
  }
}

class FormLayout extends Component {

  constructor(props) {
    super(props);

    this.state = {
      canSubmit: false
    }
  }

  enableSubmission = () => {
    this.setState({
      canSubmit: true
    })
  }

  disableSubmission = () => {
    this.setState({
      canSubmit: false
    })
  }

  serverErrors = () => {
    const errors = this.props.errors || {}

    return Object.keys(errors).reduce((acc, key) => {
      if (errors[key]) {
        if (Array.isArray(errors[key])) {
          acc[key] = errors[key].join('; ')
        } else {
          acc[key] = errors[key]
        }
      }

      return acc
    }, {})
  }

  render () {
    return (
      <div>
        <Paper style={styles.paperStyle}>
          <Subheader style={styles.headerStyle}>
            {this.props.title}
          </Subheader>
          <Form
              onValid={this.enableSubmission}
              onInvalid={this.disableSubmission}
              onValidSubmit={this.props.submit}
              onInvalidSubmit={this.disableSubmission}
              validationErrors={this.serverErrors() || this.state.validationErrors}
              onChange={this.props.clearErrors}
          >
            {this.props.children}
            <RaisedButton
                style={styles.submitStyle}
                type="submit"
                label="Submit"
                disabled={!this.state.canSubmit}
            />
          </Form>
        </Paper>
      </div>
    )
  }
}

export default FormLayout
