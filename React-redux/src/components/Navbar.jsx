import React from 'react'

import {useSelector, useDispatch} from "react-redux"

function Navbar() {
    const count = useSelector((state) => state.counter.value)
  return (
    <div>
      this is navbar
      <br />
      value of count in navbar : {count}
    </div>
  )
}

export default Navbar
