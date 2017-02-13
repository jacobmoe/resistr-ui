import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { fetchAddresses } from '../actions/addresses.js'
import AutoComplete from 'material-ui/AutoComplete'

const {Grid, Row, Col} = require('react-flexbox-grid')

class AddressSearch extends Component {
  render () {
    return (
      <Grid style={{marginBottom: '20px'}}>
        <Row center="xs">
          <Col xs={12} >
            <AutoComplete
              hintText="Address"
              dataSource={this.props.addresses}
              onUpdateInput={
                _.debounce((value) => (
                  this.props.getAddresses(
                    value,
                    this.props.browserCoords
                  )
                ), 250)
              }
              fullWidth={true}
            />
          </Col>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    addresses: state.addresses.map((a) => (a.properties.label)),
    browserCoords: state.browserCoords
  }
}

const mapDispatchToProps = (dispatch) => ({
  getAddresses: (value, browserCoords) => {
    dispatch(fetchAddresses(value, browserCoords))
  }
})

AddressSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressSearch)

export default AddressSearch
