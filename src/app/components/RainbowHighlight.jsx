import React from 'react'
import { RoughNotation } from 'react-rough-notation'

export const RainbowHighlight = ({ color, children }) => {
  // Change the animation duration depending on length of text we're animating (speed = distance / time)
  const animationDuration = Math.floor(30 * children.length)

  return (
    <RoughNotation
      type='highlight'
      multiline={true}
      animationDuration={animationDuration}
      strokeWidth={5}
      color={color}
      className='RoughNotation'
    >
      {children}
    </RoughNotation>
  )
}
