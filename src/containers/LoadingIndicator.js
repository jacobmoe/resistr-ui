import React, { Component } from 'react'
import { connect } from 'react-redux'

import RefreshIndicator from 'material-ui/RefreshIndicator'
import CircularProgress from 'material-ui/CircularProgress'

const style = {
  refresh: {
    position: 'relative'
  }
}

const LoadingIndicator = ({ size, left, top, requestStarted }) => {
  return (
    <RefreshIndicator
        size={size || 20}
        left={left || 0}
        top={top || 0}
        status={'loading'}
        style={style.refresh}
        loadingColor="#FF9800"
    />
  )
}

const mapStateToProps = (state) => {
  return {
    requestStarted: state.requests.requestStarted
  }
}

const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadingIndicator)

