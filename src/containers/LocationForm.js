import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchCongressionalDistrictSearchResults
} from '../actions/congressionalDistrictSearchResults'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
const {Grid, Row, Col} = require('react-flexbox-grid')

class LocationForm extends Component {
  render () {
    let input

    const onSubmit = (e) => {
      e.preventDefault()
      if (!input.value.trim()) {
        return
      }
      this.props.dispatch(
        fetchCongressionalDistrictSearchResults(input.value)
      )
    }

    return (
      <Grid style={{marginBottom: '20px'}}>
        <Row center="xs">
          <Col xs={12} >
            <form onSubmit={onSubmit}>
              <TextField
                hintText="zip or address"
                ref={node => {input = node.input}}
              />
              <RaisedButton
                label="Submit"
                type="submit"
                style={{marginLeft: '20px'}}
              />
            </form>
          </Col>
        </Row>
      </Grid>
    )
  }
}

LocationForm = connect()(LocationForm)

export default LocationForm
