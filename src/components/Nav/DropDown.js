import React, { useState, createRef } from "react"
import { useOnClickOutside } from "../../hooks/useOnClickOutside"

import Text from "../Text"

import styled from "styled-components"
import { motion } from "framer-motion"

import Icon from "../Icon"

const NavListItem = styled.div`
  white-space: nowrap;
  margin: 0;
  color: ${props => props.theme.colors.text};
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`

const DropdownTitle = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-right: 1.5rem;

  &:hover {
    & > svg {
      fill: ${props => props.theme.colors.primary};
    }
  }
`

const StyledIcon = styled(Icon)`
  transform: ${props => (props.isOpen ? `rotate(180deg)` : ``)};
`

const DropdownList = styled(motion.ul)`
  margin: 0;
  position: absolute;
  margin-top: ${props => (props.hasSubNav ? `-4.5rem` : `-1rem`)};
  list-style-type: none;
  list-style-image: none;
  top: 100%;
  width: auto;
  border-radius: 0.5em;
  background: ${props => props.theme.colors.dropdownBackground};
  border: 1px solid ${props => props.theme.colors.dropdownBorder};
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`

const DropdownItem = styled.li`
  margin: 0;
  color: ${props => props.theme.colors.text};
  &:hover {
    color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.dropdownBackgroundHover};
  }
`

const NavLink = styled.a`
  text-decoration: none;
  display: block;
  padding: 0.5rem;
  color: ${props => props.theme.colors.text};
  svg {
    fill: ${props => props.theme.colors.text200};
  }
  &:hover {
    color: ${props => props.theme.colors.primary};
    svg {
      fill: ${props => props.theme.colors.primary};
    }
  }
`

const listVariants = {
  open: {
    opacity: 1,
    rotateX: 0,
    display: "block",
    transition: {
      duration: 0.2,
    },
  },
  closed: {
    opacity: 0,
    rotateX: -15,
    transitionEnd: {
      display: "none",
    },
  },
}

const DropDown = ({ section, hasSubNav }) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = createRef()

  useOnClickOutside(ref, () => setIsOpen(false))

  const onKeyDownHandler = e => {
    if (e.keyCode === 13) {
      setIsOpen(!isOpen)
    }
  }

  const ariaLabel = section.ariaLabel || section.text

  return (
    <NavListItem ref={ref} aria-label={ariaLabel}>
      <DropdownTitle
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={onKeyDownHandler}
        tabIndex="0"
      >
        <Text id={section.text} />
        <StyledIcon isOpen={isOpen} name="chevronDown" />
      </DropdownTitle>
      <DropdownList
        hasSubNav={hasSubNav}
        animate={isOpen ? "open" : "closed"}
        variants={listVariants}
        initial="closed"
      >
        {section.items.map((item, idx) => {
          return (
            <DropdownItem key={idx} onClick={() => setIsOpen(false)}>
              <NavLink>
                <Text id={item.text} />
              </NavLink>
            </DropdownItem>
          )
        })}
      </DropdownList>
    </NavListItem>
  )
}

export default DropDown
