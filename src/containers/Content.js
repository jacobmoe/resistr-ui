import React, { Component } from 'react'
import { connect } from 'react-redux'
import DistrictList from './DistrictList'
import MemberCardListContainer from './MemberCardListContainer'

const Content = ({ districts }) => {
  let content

  if (districts.length > 1) {
    content = <DistrictList />
  } else {
    content = <MemberCardListContainer />
  }

  return (
    <div>
      {content}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    districts: state.districts
  }
}

export default connect(mapStateToProps)(Content)
