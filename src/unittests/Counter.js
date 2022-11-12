import React, { useState } from 'react'

const Counter = ({ init = 0 }) => {
  const { count, setCount } = useState(init)

  const increment = () => {
    setCount(current => current + 1)
  }

  const decrement = () => {
    setCount(current => current - 1)
  }

  return (
    <section className='__test-section'>
      <div className='display-4' data-testid="count">{count}</div>
      <button onClick={() => increment()} className="btn btn-lg btn-secondary me"></button>
      <button onClick={() => decrement()} className="btn btn-lg btn-secondary me"></button>

    </section>
  )
}

export default Counter