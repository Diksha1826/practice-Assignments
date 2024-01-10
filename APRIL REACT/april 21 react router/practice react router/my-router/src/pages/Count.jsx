import React from 'react'
import { useParams } from 'react-router-dom'

const Count = () => {
    const params = useParams();

  return (
    <div>Count : {params.initialCount}</div>
  )
}

export default Count