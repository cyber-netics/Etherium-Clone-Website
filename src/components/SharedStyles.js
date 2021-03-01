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

// Headers
export const H2 = styled.h2`
  ${Mixins.textLevel2}
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    font-size: 1.5rem;
  }
`
