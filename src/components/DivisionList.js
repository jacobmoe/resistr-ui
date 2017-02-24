import React, { PropTypes } from 'react'

import Division from '../components/Division'

const DivisionList = ({divisions, onMemberCardClick}) => {
  return (
    <div>
      {divisions.map(division =>
        <Division key={division.name} division={division} />
      )}
    </div>
  )
}

export default DivisionList
