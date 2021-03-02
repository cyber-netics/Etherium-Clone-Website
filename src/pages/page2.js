import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import ButtonLink from "../components/ButtonLink"
import PageHero from "../components/PageHero"
import Text from "../components/Text"
import Callout from "../components/Callout"
import ActionCard from "../components/ActionCard"
import PageMetadata from "../components/PageMetadata"

import {
  Page,
  Content,
  Divider,
  H2,
  CardContainer,
} from "../components/SharedStyles"

const CentralColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`

const SubtitleThree = styled.div`
  font-size: 20px;
  line-height: 140%;
  color: ${props => props.theme.colors.text};
  margin-bottom: 1.5rem;
  text-align: center;
`

const FindWallet = styled(Img)`
  margin-top: 2rem;
  max-width: 800px;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
`

const CalloutCardContainer = styled(CardContainer)`
  margin-top: 4rem;
`

const StyledCallout = styled(Callout)`
  flex: 1 1 424px;
  min-height: 100%;
`

const ActionIntro = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`

const Subtitle = styled.div`
  font-size: 20px;
  line-height: 140%;
  color: ${props => props.theme.colors.text200};
`

const SubtitleTwo = styled.div`
  font-size: 20px;
  line-height: 140%;
  color: ${props => props.theme.colors.text300};
`

const ActionCardContainer = styled(CardContainer)`
  justify-content: center;
  margin-bottom: 3rem;
`

const Page2 = ({ data }) => {
  const heroContent = {
    title: "ETHEREUM WALLETS",
    header: "The key to your digital future",
    subtitle:
      "Wallets give access to your funds and Ethereum applications. Only you should have access to your wallet.",
    image: data.hero.childImageSharp.fluid,
    alt: "page-wallets-alt",
    buttons: [
      {
        path: "/wallets/find-wallet/",
        content: "Find Out More",
      },
    ],
  }

  const actions = [
    {
      title: <Text id="page-what-is-ethereum-native-title" />,
      to: "/eth/",
      alt: "page-what-is-ethereum-native-alt",
      image: data.eth.childImageSharp.fixed,
      description: <Text id="page-what-is-ethereum-native-crypto" />,
    },
    {
      title: <Text id="page-what-is-ethereum-wallets" />,
      to: "/wallets/",
      alt: "page-what-is-ethereum-native-img-alt",
      image: data.wallets.childImageSharp.fixed,

      description: <Text id="page-what-is-ethereum-wallets-desc" />,
    },
    {
      title: <Text id="page-what-is-ethereum-dapps-title" />,
      to: "/dapps/",
      alt: "page-what-is-ethereum-dapps-img-alt",
      image: data.dapps.childImageSharp.fixed,
      description: <Text id="page-what-is-ethereum-dapps-desc" />,
    },
  ]

  return (
    <Page>
      <PageMetadata
        title={"page-index-meta-title"}
        description={"page-index-meta-description"}
      />
      <PageHero content={heroContent} />
      <Content>
        <Divider />
        <ActionIntro>
          <H2>
            <Text id="page-what-is-ethereum-try" />
          </H2>
          <Subtitle>
            <Text id="page-what-is-ethereum-get-started" />{" "}
          </Subtitle>
          <SubtitleTwo>
            <Text id="page-what-is-ethereum-adventure" />
          </SubtitleTwo>
        </ActionIntro>
        <ActionCardContainer>
          {actions.map((action, idx) => {
            return (
              <ActionCard
                key={idx}
                to={action.to}
                alt={action.alt}
                image={action.image}
                title={action.title}
                description={action.description}
              />
            )
          })}
        </ActionCardContainer>
      </Content>
      <Content>
        <CentralColumn>
          <Divider />
          <H2>
            <Text id="page-wallets-explore" />
          </H2>
          <SubtitleThree>
            <Text id="page-wallets-features-desc" />
          </SubtitleThree>
          <ButtonLink to="/wallets/find-wallet/">
            <Text id="page-wallets-find-wallet-btn" />
          </ButtonLink>
          <FindWallet fluid={data.findWallet.childImageSharp.fluid} alt="" />
        </CentralColumn>
      </Content>

      <Content>
        <Divider />
        <H2>
          <Text id="page-wallets-explore" />
        </H2>
        <CalloutCardContainer>
          <StyledCallout
            image={data.eth.childImageSharp.fixed}
            title={"page-wallets-get-some"}
            alt={"page-wallets-get-some"}
            description={"page-wallets-get-some-desc"}
          >
            <div>
              <ButtonLink to="/get-eth/">
                <Text id="page-wallets-get-some-btn" />
              </ButtonLink>
            </div>
          </StyledCallout>
          <StyledCallout
            image={data.dapps.childImageSharp.fixed}
            title={"page-wallets-try-dapps"}
            alt={"page-wallets-try-dapps-alt"}
            description={"page-wallets-try-dapps-desc"}
          >
            <div>
              <ButtonLink to="/dapps/">
                <Text id="page-wallets-more-on-dapps-btn" />
              </ButtonLink>
            </div>
          </StyledCallout>
        </CalloutCardContainer>
      </Content>
    </Page>
  )
}

export default Page2

export const calloutImage = graphql`
  fragment calloutImage on File {
    childImageSharp {
      fixed(height: 200) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const actionCardImage = graphql`
  fragment actionCardImage on File {
    childImageSharp {
      fixed(width: 368) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "wallet.png" }) {
      childImageSharp {
        fluid(maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    findWallet: file(relativePath: { eq: "wallets/find-wallet.png" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    eth: file(relativePath: { eq: "eth-logo.png" }) {
      ...calloutImage
    }
    dapps: file(relativePath: { eq: "doge-computer.png" }) {
      ...calloutImage
    }
    wallets: file(relativePath: { eq: "wallet-cropped.png" }) {
      ...actionCardImage
    }
  }
`
