import React from "react"
import styled from "styled-components"
import links from "./links.json"
import Icon from "../Icon"
import DropDown from "./DropDown"

const NavContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
`

const StyledNav = styled.nav`
  height: ${props => props.theme.variables.navHeight};
  padding: 1rem 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.colors.background};
  border-bottom: 1px solid rgba(0, 0, 0, 0.1); /* TODO use theme variable */
`

const NavContent = styled.div`
  display: flex;
  width: 100%;
  max-width: ${props => props.theme.breakpoints.xl};
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    align-items: center;
    justify-content: space-between;
  }
`

const InnerContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    display: none;
  }
`

const LeftItems = styled.ul`
  margin: 0;
  margin-left: 2rem;
  display: flex;
  align-items: center;
  list-style-type: none;
  list-style-image: none;
`

const RightItems = styled.div`
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavList = styled.li`
  white-space: nowrap;
  margin: 0;
  padding-right: 10px;
  padding-left: 10px;
`

const ThemeToggle = styled.span`
  cursor: pointer;
  margin-left: 1rem;
  display: flex;
  align-items: center;
`

const NavIcon = styled(Icon)`
  fill: ${props => props.theme.colors.text};
`

const NavListItem = styled.div`
  white-space: nowrap;
  margin: 0;
  color: ${props => props.theme.colors.text};
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`

const Nav = ({ handleThemeChange, isDarkTheme, path }) => {
  const shouldShowSubNav = path.includes("/developers/")

  return (
    <NavContainer>
      <StyledNav>
        <NavContent>
          <InnerContent>
            <LeftItems>
              {links.linkSections.map((section, idx) => {
                if (!section.items) return null
                return (
                  <NavList key={idx}>
                    <NavListItem>
                      <DropDown
                        section={section}
                        key={idx}
                        hasSubNav={shouldShowSubNav}
                      />
                    </NavListItem>
                  </NavList>
                )
              })}
            </LeftItems>
            <RightItems>
              <ThemeToggle onClick={handleThemeChange}>
                <NavIcon name={isDarkTheme ? "darkTheme" : "lightTheme"} />
              </ThemeToggle>
            </RightItems>
          </InnerContent>
        </NavContent>
      </StyledNav>
    </NavContainer>
  )
}

export default Nav
