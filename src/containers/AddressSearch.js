import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { fetchAddressSearchResults } from '../actions/addressSearchResults'
import { buildLocation } from '../actions/location'
import AutoComplete from 'material-ui/AutoComplete'

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
        this.props.buildLocation({
          coords: {
            lat: obj.coords[1],
            lon: obj.coords[0]
          },
          label: obj.label
        })
      }
    }

    return (
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
        style={{paddingLeft: '10px', marginBottom: '20px'}}
      />
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
  buildLocation: (location) => {
    dispatch(buildLocation(location))
  }
})

AddressSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressSearch)

export default AddressSearch
