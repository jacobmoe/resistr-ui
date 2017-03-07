import React, { PropTypes } from 'react'

import Division from './Division'
import WelcomeMessage from './WelcomeMessage'

const DivisionList = ({divisions, onMemberCardClick}) => {
  return (
    <div>
      {divisions && (divisions.length < 1) && <WelcomeMessage />}

      {divisions.map(division =>
        <Division key={division.name} division={division} />
      )}
    </div>
  )
}

export default DivisionList
