import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { fetchAddressSearchResults } from '../actions/addressSearchResults'
import {
  fetchCongressionalDistrictSearchResults
} from '../actions/congressionalDistrictSearchResults'
import { setAddress } from '../actions/address'
import AutoComplete from 'material-ui/AutoComplete'

const {Grid, Row, Col} = require('react-flexbox-grid')

class AddressSearch extends Component {
  render () {
    // got to be a better way to do this
    // after selecting the address from the list
    // need to get the original object with coords
    // from the data source.
    // but what is `dataSourceConfig` for if there's
    // no way to access "value"
    const onClose = () => {
      const addresses = this.refs.autocomplete.props.dataSource
      const text = this.refs.autocomplete.state.searchText

      const obj = _.find(addresses, {label: text})

      if (obj) {
        const coords = {
          lat: obj.coords[1],
          lon: obj.coords[0]
        }

        this.props.setAddress(obj)
        this.props.getDistricts(coords)
        obj.coords = coords

      }
    }

    return (
      <Grid style={{marginBottom: '20px'}}>
        <Row center="xs">
          <Col xs={12} >
            <AutoComplete
              hintText="Address"
              dataSource={this.props.addressSearchResults}
              dataSourceConfig={{
                text: 'label',
                value: 'coords'
              }}
              onUpdateInput={
                _.debounce((value) => (
                  this.props.getAddressSearchResults(
                    value,
                    this.props.browserCoords
                  )
                ), 250)
              }
              fullWidth={true}
              onClose={onClose.bind(this)}
              ref={'autocomplete'}
              filter={AutoComplete.fuzzyFilter}
            />
          </Col>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    addressSearchResults: state.addressSearchResults.map((a) => (
      {
        label: a.properties.label,
        coords: a.geometry.coordinates
      }
    )),
    browserCoords: state.browserCoords
  }
}

const mapDispatchToProps = (dispatch) => ({
  getAddressSearchResults: (value, browserCoords) => {
    dispatch(fetchAddressSearchResults(value, browserCoords))
  },
  getDistricts: (coords) => {
    dispatch(fetchCongressionalDistrictSearchResults(coords))
  },
  setAddress: (address) => {
    dispatch(setAddress(address))
  }
})

AddressSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressSearch)

export default AddressSearch
