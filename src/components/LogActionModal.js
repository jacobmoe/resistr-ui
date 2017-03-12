import React from 'react'

import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

const LogActionModal = ({ isOpen, handleCancel, handleSubmit }) => {

  const cancel = <FlatButton label="Cancel" onTouchTap={handleCancel} />
  const submit = <FlatButton label="Submit" onTouchTap={handleSubmit} />

  return (
    <div>
      <Dialog
          title="Log an action"
          actions={[cancel, submit]}
          modal={false}
          open={isOpen}
          onRequestClose={() => {}}
          autoScrollBodyContent={true}
          onRequestClose={handleCancel}
      >

        <p>
          Representative Modal
        </p>

      </Dialog>
    </div>
  )
}

export default LogActionModal
