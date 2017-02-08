import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitLocationForm } from '../actions'

class LocationForm extends Component {
  render () {
    let input

    const onSubmit = (e) => {
      e.preventDefault()
      if (!input.value.trim()) {
        return
      }
      this.props.dispatch(submitLocationForm(input.value))
      input.value = ''
    }

    return (
      <div>
        <form onSubmit={onSubmit}>
          <input ref={node => {input = node}} />
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    )
  }
}

LocationForm = connect()(LocationForm)

export default LocationForm
