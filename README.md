# react-rate-thing

> A simple component to rate something

[![NPM](https://img.shields.io/npm/v/react-rate-thing.svg)](https://www.npmjs.com/package/react-rate-thing) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-rate-thing
```

## Usage

```jsx
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
```

## License

MIT © [pecelpagi](https://github.com/pecelpagi)
