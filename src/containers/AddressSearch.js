import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { fetchAddressSearchResults } from '../actions/addressSearchResults'
import { buildAddress } from '../actions/address'
import AutoComplete from 'material-ui/AutoComplete'

const style = {
  autocomplete: {
    width: '95%',
    margin: 'auto',
    display: 'block'
  },
  textField: {

  }
}

class AddressSearch extends Component {
  constructor (params) {
    super(params)

    if (this.props.address) {
      this.props.buildAddress(this.props.address)
    }
  }

  receiveAddress (a, b) {
    // got to be a better way to do this
    // after selecting the address from the list
    // need to get the original object with coords
    // from the data source.
    // but what is `dataSourceConfig` for if there's
    // no way to access "value"
    const addresses = this.refs.autocomplete.props.dataSource
    const text = this.refs.autocomplete.state.searchText

    const obj = _.find(addresses, {label: text})

    if (obj && obj.label) {
      this.props.buildAddress(obj.label)
    }
  }

  render () {
    return (
      <div>
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
            onClose={this.receiveAddress.bind(this)}
            ref={'autocomplete'}
            filter={AutoComplete.fuzzyFilter}
            style={style.autocomplete}
            textFieldStyle={style.textField}
            searchText={this.props.address || ""}
        />
      </div>
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
