// Write your Character component here
import React from 'react'


function Character(props) {
  return (
    <div>{
        props.data.map(char => {
            return <h3>{char.name}</h3>
        })
        }</div>
  )
}

export default Character
