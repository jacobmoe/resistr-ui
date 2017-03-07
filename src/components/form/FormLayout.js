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

  enableSubmission () {
    this.setState({
      canSubmit: true
    })
  }

  disableSubmission () {
    this.setState({
      canSubmit: false
    })
  }

  render () {
    return (
      <div>
        <Paper style={styles.paperStyle}>
          <Subheader style={styles.headerStyle}>
            {this.props.title}
          </Subheader>
          <Form
              onValid={this.enableSubmission.bind(this)}
              onInvalid={this.disableSubmission.bind(this)}
              onValidSubmit={this.props.submit}
              onInvalidSubmit={this.disableSubmission.bind(this)}
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
