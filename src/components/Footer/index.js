import React from "react"
import styled from "styled-components"

import { Mixins } from "../../theme"
import Icon from "../Icon"
import Text from "../Text"

import content from "./content.json"

const StyledFooter = styled.footer`
  padding-top: 3rem;
  padding-bottom: 4rem;
  padding: 1rem 2rem;
`

const FooterTop = styled.div`
  font-size: ${props => props.theme.fontSizes.s};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

const SocialIcons = styled.div`
  margin: 1rem 0;
`
const SocialIcon = styled(Icon)`
  margin-left: 1rem;
  width: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    margin-left: 0;
    margin-right: 0.5rem;
  }
`

const LinkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, auto);
  grid-gap: 1rem;
  justify-content: space-between;
  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, auto);
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    grid-template-columns: repeat(2, auto);
  }
  @media (max-width: 500px) {
    grid-template-columns: auto;
  }
`

const LinkSection = styled.div``

const SectionHeader = styled.h3`
  ${Mixins.textLevel8}
  font-weight: bold;
`

const List = styled.ul`
  ${Mixins.textLevel8}
  margin: 0;
  list-style-type: none;
  list-style-image: none;
`

const ListItem = styled.li`
  margin-bottom: 1rem;
`

const FooterLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.text200};
  svg {
    fill: ${props => props.theme.colors.text200};
  }
  &:after {
    color: ${props => props.theme.colors.text200};
  }
  &:hover {
    color: ${props => props.theme.colors.primary};
    &:after {
      color: ${props => props.theme.colors.primary};
    }
    svg {
      fill: ${props => props.theme.colors.primary};
    }
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <FooterTop>
        <SocialIcons>
          {content.socialLinks.map((link, idx) => {
            return <SocialIcon key={idx} name={link.icon} size="36" />
          })}
        </SocialIcons>
      </FooterTop>
      <LinkGrid>
        {content.linkSections.map((section, idx) => {
          return (
            <LinkSection key={idx}>
              <SectionHeader>
                <Text id={section.title} />
              </SectionHeader>
              <List>
                {section.links.map((link, linkIdx) => {
                  return (
                    <ListItem key={linkIdx}>
                      <FooterLink
                        to={link.to}
                        isPartiallyActive={link.isPartiallyActive}
                      >
                        <Text id={link.text} />
                      </FooterLink>
                    </ListItem>
                  )
                })}
              </List>
            </LinkSection>
          )
        })}
      </LinkGrid>
    </StyledFooter>
  )
}

export default Footer
