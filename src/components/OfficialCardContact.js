import React, { PropTypes } from 'react'

const OfficialCardContact = ({ official }) => {
  if (!official.address) return (<div></div>)

  const address = official.address[0]
  const addressLines = []
  if (address.line1) addressLines.push(address.line1)
  if (address.line2) addressLines.push(address.line2)

  addressLines.push(address.city + ', ' + address.state)
  if (address.zip) addressLines.push(address.zip)

  return (
    <div>
      <p>{official.phones && official.phones[0]}</p>

      {addressLines.map((line) => {
         return (
           <div key={line}>
             {line}<br />
           </div>
         )
       })}
    </div>
  )
}

export default OfficialCardContact
