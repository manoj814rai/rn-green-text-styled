import React, { useEffect } from 'react'
import RNGreenLabelModule, { GreenLabel } from 'rn-green-text-styled'

const App = () => {
  useEffect(() => {
    console.log(RNGreenLabelModule)
  })

  return <GreenLabel label={"Say Green !!!!!!"} />
}

export default App
