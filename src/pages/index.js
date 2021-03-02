import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Text from "../components/Text"
import CalloutBanner from "../components/CalloutBanner"
import ButtonLink from "../components/ButtonLink"
import Icon from "../components/Icon"
import PageMetadata from "../components/PageMetadata"

import {
  GrayContainer,
  Content,
  LeftColumn,
  H2,
  Page,
} from "../components/SharedStyles"

import Img from "gatsby-image"

const Hero = styled(Img)`
  width: 100%;
  min-height: 380px;
  max-height: 440px;
  background-size: cover;
  background: no-repeat 50px;
  margin-bottom: 2rem;
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding: 0 2rem;
`

const H1 = styled.h1`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 0rem;
  text-align: center;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 32px;
  }
`

const Description = styled.p`
  color: ${props => props.theme.colors.text200};
  max-width: 55ch;
  text-align: center;
  align-self: center;
  font-size: 20px;
  margin-top: 1rem;
`

const StyledGrayContainer = styled(GrayContainer)`
  box-shadow: inset 0px 0px 0px
    ${props => props.theme.colors.tableItemBoxShadow};
  padding: 0rem;
  padding-bottom: 4rem;
  margin-top: 0rem;
`

const StyledContent = styled(Content)`
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    padding: 1rem;
  }
`

const IntroRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  margin-top: 1rem;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    flex-direction: column-reverse;
    margin: 0rem;
  }
`

const IntroLeftColumn = styled(LeftColumn)`
  padding: 6rem;
  height: 100%;
  width: 100%;
  margin: 0;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    padding: 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding: 0rem;
  }
`

const Subtitle = styled.div`
  margin-bottom: 2rem;
  font-size: 20px;
  line-height: 140%;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 16px;
  }
`

const ImageContainer = styled.div`
  background: "#F1FFFD";
  display: flex;
  height: 100%;
  width: 100%;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    width: 75%;
  }
`

const IntroImage = styled(Img)`
  width: 100%;
  background-size: cover;
  background: no-repeat 50px;
`

const StyledCalloutBanner = styled(CalloutBanner)`
  margin: 8rem 0 4rem;
  padding: 2rem 4rem;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    margin-bottom: 4rem;
    padding: 2rem;
  }
`

const ButtonRow = styled.div`
  display: flex;
  align-items: flex-start;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    flex-direction: column;
  }
`

const StyledButtonLink = styled(ButtonLink)`
  margin-left: 0.5rem;
  margin-top: 0rem;
  display: flex;
  align-items: center;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    margin-top: 1rem;
    margin-left: 0rem;
  }
`

const StyledIcon = styled(Icon)`
  fill: ${props => props.theme.colors.text};
  margin-right: 0.5rem;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
  }
  &:hover {
    fill: ${props => props.theme.colors.primary};
  }
  &:active {
    fill: ${props => props.theme.colors.primary};
  }
  &:focus {
    fill: ${props => props.theme.colors.primary};
  }
`

const IndexPage = ({ data }) => {
  return (
    <Page>
      <PageMetadata
        title={"page-index-meta-title"}
        description={"page-index-meta-description"}
      />
      <Hero
        fluid={data.hero.childImageSharp.fluid}
        alt={"page-index-hero-image-alt"}
        loading="eager"
      />
      <Header>
        <H1>
          <Text id="Welcome-to-tech-hub" />
        </H1>
        <Description>
          <Text id="Tech Hub to get updated about latest technologis and frameworks. All about web technologies and that will shape our future" />
        </Description>
        <ButtonLink isSecondary to="/what-is-tech-hub/">
          <Text id="Learn More" />
        </ButtonLink>
      </Header>
      <StyledGrayContainer>
        <StyledContent>
          <IntroRow>
            <IntroLeftColumn>
              <H2>
                <Text id="get-started" />
              </H2>
              <Subtitle>
                <Text id="Portal into the world of techologies. The tech is new and ever Evolvoing - it heps to have a guid to get started" />
              </Subtitle>
            </IntroLeftColumn>
            <ImageContainer>
              <IntroImage
                fluid={data.hackathon.childImageSharp.fluid}
                alt={"page-index-get-started-image-alt"}
              />
            </ImageContainer>
          </IntroRow>
          <StyledCalloutBanner
            title={"contribute to the world of techologies"}
            description={
              "This website is open source with hundreds of community contributors. You can propose edits to any of the content on this site, suggest awesome new features, or help us squash bugs."
            }
            image={data.finance.childImageSharp.fluid}
            maxImageWidth={600}
            alt={"page-banner"}
          >
            <ButtonRow>
              <ButtonLink to="/en/contributing/">
                <Text id="More Information" />
              </ButtonLink>
              <StyledButtonLink
                isSecondary
                to="https://github.com/cyber-netics/Etherium-Clone-Website"
              >
                <StyledIcon name="github" /> GitHub
              </StyledButtonLink>
            </ButtonRow>
          </StyledCalloutBanner>
        </StyledContent>
      </StyledGrayContainer>
    </Page>
  )
}

export default IndexPage

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "home/hero.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hackathon: file(relativePath: { eq: "hackathon_transparent.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    finance: file(relativePath: { eq: "finance_transparent.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
