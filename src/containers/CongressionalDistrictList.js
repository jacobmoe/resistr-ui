import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  updateCongressionalDistrict
} from '../actions/congressionalDistrict'

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

class CongressionalDistrictList extends Component {
  render () {
    return (
      <List>
        <Subheader>Select your district</Subheader>
        {this.props.districts.map(district =>
            <ListItem
              primaryText={district.state + '-' + district.district}
              onClick={(e) => {
                this.props.updateCongressionalDistrict(district)
              }}
              key={district.state + '-' + district.district}
            />
        )}
      </List>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    districts: state.congressionalDistrictSearchResults
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCongressionalDistrict: (district) => {
    dispatch(updateCongressionalDistrict(district))
  }
})

CongressionalDistrictList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CongressionalDistrictList)

export default CongressionalDistrictList
