import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAddresses } from '../actions/addresses.js'
import AutoComplete from 'material-ui/AutoComplete'

class AddressSearch extends Component {
  render () {
    return (
      <AutoComplete
        hintText="Address"
        dataSource={this.props.addresses}
        onUpdateInput={(value) => this.props.getAddresses(value)}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    addresses: state.addresses.map((a) => (a.properties.label))
  }
}

const mapDispatchToProps = (dispatch) => ({
  getAddresses: (value) => {
    dispatch(fetchAddresses(value))
  }
})

AddressSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressSearch)

export default AddressSearch
