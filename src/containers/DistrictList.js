import React, { Component } from 'react'
import { connect } from 'react-redux'

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
const {Grid, Row, Col} = require('react-flexbox-grid')

class DistrictList extends Component {
  render () {
    const onClick = (e) => {
      debugger
    }

    return (
      <Grid>
        <Row center="xs" style={{textAlign: 'left'}}>
          <Col xs={6}>
            <List>
              <Subheader>Select your district</Subheader>
              {this.props.districts.map(district =>
                 <ListItem
                    primaryText={district}
                    onClick={onClick}
                    key={district}
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
    districts: state.districts.map(d => d.state + '-' + d.district)
  }
}

DistrictList = connect(
  mapStateToProps
)(DistrictList)

export default DistrictList
