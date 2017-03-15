import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { fetchAddressSearchResults } from '../actions/addressSearchResults'
import { buildAddress } from '../actions/address'
import AutoComplete from 'material-ui/AutoComplete'

class AddressSearch extends Component {
  constructor (params) {
    super(params)

    if (this.props.address) {
      this.props.buildAddress(this.props.address)
    }
  }

  render () {
    return (
      <div>
        <AutoComplete
            hintText="Address"
            dataSource={this.props.addressSearchResults}
            onUpdateInput={
              _.debounce((value) => (
                this.props.getAddressSearchResults(
                  value,
                  this.props.browserCoords
                )
              ), 250)
            }
            fullWidth={true}
            onNewRequest={this.props.buildAddress}
            ref={'autocomplete'}
            filter={AutoComplete.fuzzyFilter}
            searchText={this.props.address || ""}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    addressSearchResults: state.addressSearchResults.map((a) => (
      a.properties.label
    )),
    browserCoords: state.browserCoords,
    address: state.address
  }
}

const mapDispatchToProps = (dispatch) => ({
  getAddressSearchResults: (value, browserCoords) => {
    dispatch(fetchAddressSearchResults(value, browserCoords))
  },
  buildAddress: (address) => {
    dispatch(buildAddress(address))
  }
})

AddressSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressSearch)

export default AddressSearch
