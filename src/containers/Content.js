import React, { Component } from 'react'
import { connect } from 'react-redux'
import DistrictList from './DistrictList'
import MemberCardListContainer from './MemberCardListContainer'
import CongressionalDistrictsMap from '../components/CongressionalDistrictsMap'
import { fetchMembers } from '../actions/members'

const {Grid, Row, Col} = require('react-flexbox-grid')

const Content = ({ district, districts, fetchDistrictMembers }) => {
  let content

  return (
    <Grid>
      <Row center="xs">
        <Col xs={12}>
          {district && <MemberCardListContainer />}
          {(districts.length > 1) && <DistrictList />}
        </Col>
      </Row>

      <Row center="xs">
        <Col xs={12}>
          {(districts.length > 1) && <CongressionalDistrictsMap />}
        </Col>
      </Row>
    </Grid>
  )
}

const mapStateToProps = (state) => {
  return {
    districts: state.districts,
    district: state.district
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchDistrictMembers: (district) => {
    dispatch(fetchMembers(district))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Content)
