import React, { Component } from 'react'
import { connect } from 'react-redux'
import CongressionalDistrictList from './CongressionalDistrictList'
import MemberCardListContainer from './MemberCardListContainer'
import CongressionalDistrictMap from '../components/CongressionalDistrictMap'
import { fetchMembers } from '../actions/members'

const {Grid, Row, Col} = require('react-flexbox-grid')

const Content = ({ location, fetchDistrictMembers }) => {
  let content

  return (
    <Grid>
      <Row center="xs">
        <Col xs={12}>
          {location && <MemberCardListContainer />}
        </Col>
      </Row>
    </Grid>
  )
}

const mapStateToProps = (state) => {
  return {
    location: state.location
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchDistrictMembers: (district) => {
    dispatch(fetchMembers(district))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Content)
