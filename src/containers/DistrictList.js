import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateDistrict } from '../actions/districts'

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

class DistrictList extends Component {
  render () {
    return (
      <List>
        <Subheader>Select your district</Subheader>
        {this.props.districts.map(district =>
            <ListItem
              primaryText={district.state + '-' + district.district}
              onClick={(e) => {this.props.updateDistrict(district)}}
              key={district.state + '-' + district.district}
            />
        )}
      </List>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    districts: state.districts
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateDistrict: (district) => {
    dispatch(updateDistrict(district))
  }
})

DistrictList = connect(
  mapStateToProps,
  mapDispatchToProps
)(DistrictList)

export default DistrictList
