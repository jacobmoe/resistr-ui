import React, { PropTypes } from 'react'
import {
  Card,
  CardActions,
  CardHeader,
  CardTitle,
  CardText
} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const RepCard = ({ onClick, completed, text }) => (
  <Card>
    <CardHeader
      title="Temp Title"
      subtitle={text}
      avatar=""
      titleColor={completed ? 'red' : 'black'}
    />

    <CardTitle title="Card title" subtitle="Card subtitle" />

    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>

    <CardActions>
      <FlatButton label="Mark complete" onClick={onClick} />
    </CardActions>
  </Card>
)

RepCard.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default RepCard
