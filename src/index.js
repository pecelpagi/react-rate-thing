import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'

const Wrapper = styled.div`
  display: inline-block;
  color: #fcc95c;
  :hover {
    cursor: pointer;
  }
`
const ReactRateThing = ({ value, onClick }) => {
  const [hoverState, setHoverState] = useState({ isHovering: false })

  useEffect(() => {
    if (value > 5) {
      onClick(5)
    } else if (value < 0) {
      onClick(0)
    }
  })

  const selected = value

  const stars = []

  for (let i = 1; i <= 5; i += 1) {
    let icon = farFaStar
    const props = {
      onMouseEnter: () => setHoverState({ position: i, isHovering: true }),
      onMouseLeave: () => setHoverState({ isHovering: false }),
      onClick: () => onClick(i)
    }

    if (hoverState.isHovering && i <= hoverState.position) {
      icon = fasFaStar
    } else if (!hoverState.isHovering && i <= selected) {
      icon = fasFaStar
    }

    stars.push(
      <Wrapper {...props} key={i}>
        <FontAwesomeIcon icon={icon} />
      </Wrapper>
    )
  }

  return stars
}

ReactRateThing.propTypes = {
  value: PropTypes.number.isRequired
}

export default ReactRateThing
