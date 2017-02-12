import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateDistrict } from '../actions/districts'

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
const {Grid, Row, Col} = require('react-flexbox-grid')

class DistrictList extends Component {
  render () {
    return (
      <Grid>
        <Row center="xs" style={{textAlign: 'left'}}>
          <Col xs={6}>
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
          </Col>
        </Row>
      </Grid>
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
