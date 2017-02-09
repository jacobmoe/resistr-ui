import React, { PropTypes } from 'react'
import {
  Card,
  CardActions,
  CardHeader,
  CardTitle,
  CardText
} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const repCardStyles = {
  height: '285px',
  marginBottom: '20px'
}

const RepCard = ({ onClick, completed, rep }) => {
  return (
    <Card style={repCardStyles}>
      <CardHeader
        title={rep.first_name + ' ' + rep.last_name}
        subtitle={rep.chamber}
        avatar=""
        titleColor={completed ? 'red' : 'black'}
      />

      <CardTitle title={rep.phone} subtitle={rep.oc_email} />

      <CardText>
        {rep.office}
      </CardText>

      <CardActions>
        <FlatButton label="Called" onClick={onClick} />
      </CardActions>
    </Card>
  )
}

RepCard.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool,
  rep: PropTypes.shape({})
}

export default RepCard
