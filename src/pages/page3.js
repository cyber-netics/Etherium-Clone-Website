import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import { Page, Content } from "../components/SharedStyles"
import Text from "../components/Text"
import ButtonLink from "../components/ButtonLink"
import DataProductCard from "../components/DataProductCard"

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  justify-content: center;
  @media (max-width: ${props => props.theme.breakpoints.xl}) {
    max-width: 100vw;
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    flex-direction: column-reverse;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    flex-direction: column-reverse;
    margin-bottom: 0rem;
  }
`

const Hero = styled(Img)`
  position: absolute !important;
  z-index: -1;
  width: 100%;
  max-width: 1440px;
  @media (max-width: ${props => props.theme.breakpoints.xl}) {
    max-width: 100vw;
  }
  min-height: 300px;
  max-height: 400px;
  background-size: cover;
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6rem;
  text-align: center;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    margin: 2rem;
  }
`

const Subtitle = styled.div`
  font-size: 20px;
  line-height: 140%;
  text-align: center;
  color: ${props => props.theme.colors.text200};
`

const SubtitleTwo = styled.div`
  font-size: 20px;
  line-height: 140%;
  margin-bottom: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.text300};
`

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
  gap: 2rem;
`

const StyledCardGrid = styled(CardGrid)`
  margin-bottom: 4rem;
`

const Page3 = ({ data }) => {
  const dapps = [
    {
      background: "linear-gradient(225deg, #AA589B 0%, #5CB8C4 100%)",
      url: "https://aave.com",
      alt: "aave-logo",
      image: data.aave.childImageSharp.fixed,
      name: "Aave",
      description: "page-stablecoins-stablecoins-dapp-description-1",
    },
    {
      background: "#F9FAFB",
      url: "https://compound.finance",
      alt: "compound-logo",
      image: data.compound.childImageSharp.fixed,
      name: "Compound",
      description: "page-stablecoins-stablecoins-dapp-description-2",
    },
    {
      background: "#212121",
      url: "https://trade.dydx.exchange/portfolio/overview",
      alt: "dydx-logo",
      image: data.dydx.childImageSharp.fixed,
      name: "dYdX",
      description: "page-stablecoins-stablecoins-dapp-description-3",
    },
  ]

  return (
    <Page>
      <HeroContainer>
        <Hero
          fluid={data.hero.childImageSharp.fluid}
          alt={"page-get-eth-hero-image-alt"}
          loading="eager"
        />
        <Header>
          <h1>
            <Text id="page-get-eth-where-to-buy-title" />
          </h1>
          <Subtitle>
            <Text id="page-get-eth-where-to-buy-desc" />
          </Subtitle>
          <SubtitleTwo>
            <Text id="page-get-eth-where-to-buy-desc-2" />
          </SubtitleTwo>
          <ButtonLink to="#country-picker">
            <Text id="page-get-eth-search-by-country" />
          </ButtonLink>
        </Header>
      </HeroContainer>
      <Content>
        <StyledCardGrid>
          {dapps.map((dapp, idx) => {
            return (
              <DataProductCard
                key={idx}
                background={dapp.background}
                url={dapp.url}
                alt={dapp.alt}
                image={dapp.image}
                name={dapp.name}
                data={dapp.data}
                description={dapp.description}
              />
            )
          })}
        </StyledCardGrid>
      </Content>
    </Page>
  )
}

export default Page3

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "get-eth.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dydx: file(relativePath: { eq: "dydx.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    compound: file(relativePath: { eq: "compound.png" }) {
      childImageSharp {
        fixed(width: 160) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    aave: file(relativePath: { eq: "aave.png" }) {
      childImageSharp {
        fixed(width: 64) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
