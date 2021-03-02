import styled from "styled-components"
import { Mixins } from "../theme"

export const GrayContainer = styled.div`
  width: 100%;
  padding: 4rem 0rem;
  margin-top: 2rem;
  background: ${props => props.theme.colors.grayBackground};
  box-shadow: inset 0px 1px 0px
    ${props => props.theme.colors.tableItemBoxShadow};
`

export const Content = styled.div`
  padding: 1rem 2rem;
  width: 100%;
`

export const LeftColumn = styled.div`
  flex: 0 0 50%;
  max-width: 75%;
  margin-right: 4rem;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    max-width: 100%;
    margin-right: 0;
  }
`

export const NavLink = styled.a`
  text-decoration: none;
  margin-right: 2rem;
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
  &.active {
    font-weight: bold;
  }
`

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin: 0 auto;
`

export const Divider = styled.div`
  margin-bottom: 4rem;
  margin-top: 4rem;
  width: 10%;
  height: 0.25rem;
  background-color: ${props => props.theme.colors.homeDivider};
`

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -1rem;
  margin-right: -1rem;
`

// Headers
export const H2 = styled.h2`
  ${Mixins.textLevel2}
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    font-size: 1.5rem;
  }
`
