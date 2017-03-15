import React, { PropTypes } from 'react'

import OfficialCardContainer from '../containers/OfficialCardContainer'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Subheader from 'material-ui/Subheader'

const buildOfficial = (division, office, official) => {
  official.division = division
  official.office = office

  official.identifier = `${office.divisionId}_${office.name}_${official.name}`

  return official
}

const Division = ({division}) => {
  return (
    <Grid>
      <Subheader>{division.name.toUpperCase()}</Subheader>

      <Row>
        {division.offices.map(office => {
          return office.officials.map(official =>
            <Col xs sm md lg key={official.name}>
              <OfficialCardContainer official={buildOfficial(division, office, official)} />
            </Col>
          )
         })}
      </Row>
    </Grid>
  )
}

export default Division
