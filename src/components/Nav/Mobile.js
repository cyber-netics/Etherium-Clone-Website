import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

import Text from "../Text"
import Icon from "../Icon"
import { NavLink } from "../../components/SharedStyles"

const MobileModal = styled(motion.div)`
  position: fixed;
  background: ${props => props.theme.colors.modalBackground};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const mobileModalVariants = {
  open: { display: "block" },
  closed: { display: "none" },
}

const MenuContainer = styled(motion.div)`
  background: ${props => props.theme.colors.background};
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  overflow: hidden;
  width: 100%;
  max-width: 450px;
`

const mobileMenuVariants = {
  closed: { x: `-100%`, transition: { duration: 0.2 } },
  open: { x: 0, transition: { duration: 0.8 } },
}

const CloseIconContainer = styled.span`
  z-index: 102;
  cursor: pointer;

  & > svg {
    fill: ${props => props.theme.colors.text};
  }
`

const CloseMenuIconContainer = styled(CloseIconContainer)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`

const MenuItems = styled.ul`
  margin: 0;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 3rem 1rem 8rem;
`

const NavListItem = styled.li`
  margin: 0;
  margin-bottom: 3rem;
  list-style-type: none;
  list-style-image: none;
`

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  margin: 0;
`

const SectionTitle = styled.div`
  margin: 1rem 0;
  color: ${props => props.theme.colors.text};
`

const SectionItems = styled.ul`
  margin: 0;
`

const SectionItem = styled.li`
  margin-bottom: 1rem;
  list-style-type: none;
  list-style-image: none;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`

const BottomMenu = styled.div`
  background: ${props => props.theme.colors.background};
  border-top: 1px solid ${props => props.theme.colors.lightBorder};
  padding-right: 1rem;
  padding-left: 1rem;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 108px;
  align-items: center;
  width: 100%;
  max-width: 450px;
`
const BottomItem = styled.div`
  flex: 1 1 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: ${props => props.theme.colors.text};
  & > svg {
    fill: ${props => props.theme.colors.text};
  }
  &:hover {
    color: ${props => props.theme.colors.primary};
    & > svg {
      fill: ${props => props.theme.colors.primary};
    }
  }
`

const BottomItemText = styled.div`
  font-size: 0.875rem;
  line-height: 1.6;
  font-weight: 400;
  letter-spacing: 0.04em;
  margin-top: 0.5rem;
  text-transform: uppercase;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`

const MenuIcon = styled(Icon)`
  fill: ${props => props.theme.colors.text};
`

const MobileNavMenu = ({
  isMenuOpen,
  isSearchOpen,
  isDarkTheme,
  toggleMenu,
  toggleTheme,
  linkSections,
}) => {
  const isOpen = isMenuOpen || isSearchOpen

  return (
    <>
      <MobileModal
        animate={isOpen ? "open" : "closed"}
        variants={mobileModalVariants}
        initial="closed"
        onClick={toggleMenu}
      />
      <MenuContainer
        animate={isMenuOpen ? "open" : "closed"}
        variants={mobileMenuVariants}
        initial="closed"
      >
        <MenuItems>
          {linkSections.map((section, idx) => {
            if (section.items) {
              return (
                <NavListItem key={idx} aria-label={`Select ${section.text}`}>
                  <SectionTitle>
                    <Text id={section.text} />
                  </SectionTitle>
                  <SectionItems>
                    {section.items.map((item, idx) => (
                      <SectionItem key={idx} onClick={toggleMenu}>
                        <StyledNavLink
                          to={item.to}
                          isPartiallyActive={item.isPartiallyActive}
                        >
                          <Text id={item.text} />
                        </StyledNavLink>
                      </SectionItem>
                    ))}
                  </SectionItems>
                </NavListItem>
              )
            }
            return (
              <NavListItem onClick={toggleMenu} key={idx}>
                <NavLink
                  to={section.to}
                  isPartiallyActive={section.isPartiallyActive}
                >
                  <Text id={section.text} />
                </NavLink>
              </NavListItem>
            )
          })}
        </MenuItems>
        <BottomMenu>
          <BottomItem onClick={toggleTheme}>
            <MenuIcon name={isDarkTheme ? "darkTheme" : "lightTheme"} />
            <BottomItemText>
              <Text id={isDarkTheme ? "dark-mode" : "light-mode"} />
            </BottomItemText>
          </BottomItem>
        </BottomMenu>
        <CloseMenuIconContainer onClick={toggleMenu}>
          <Icon name="close" />
        </CloseMenuIconContainer>
      </MenuContainer>
    </>
  )
}

export default MobileNavMenu
