import React, { PropTypes } from 'react'

import Official from './Official'
import { Grid, Row, Col } from 'react-flexbox-grid'

const Division = ({division}) => {
  return (
    <Grid>
      <h1>{division.name}</h1>

      <Row>
        {division.offices.map(office => {
          return office.officials.map(official =>
            <Col>
              <Official
                  key={official.name}
                  official={official}
                  office={office} />
            </Col>
          )
         })}
      </Row>
    </Grid>
  )
}

export default Division
