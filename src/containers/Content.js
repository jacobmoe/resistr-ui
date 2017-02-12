import React, { Component } from 'react'
import { connect } from 'react-redux'
import DistrictList from './DistrictList'
import MemberCardListContainer from './MemberCardListContainer'
import { fetchMembers } from '../actions/members'

const Content = ({ district, districts, fetchDistrictMembers }) => {
  let content

  return (
    <div>
      {district && <MemberCardListContainer />}
      {(districts.length > 1) && <DistrictList />}
    </div>
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
