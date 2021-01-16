import React, { useState } from 'react'

import ReactRating from 'react-rate-thing'

const App = () => {
  const [rate, selectRate] = useState(0);

  return (
    <div style={{ margin: '1em' }}>
      <ReactRating value={rate} onClick={selectRate} />
      <div style={{ marginTop: '1em' }}>
        Rate: {rate}
      </div>
    </div>
  )
}

export default App
