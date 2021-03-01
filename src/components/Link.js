import React from "react"
import styled from "styled-components"
import Icon from "./Icon"

const HASH_PATTERN = /^#.*/
// const DOMAIN_PATTERN = /^(?:https?:)?[/]{2,}([^/]+)/
// const INTERNAL_PATTERN = /^\/(?!\/)/
// const FILE_PATTERN = /.*[/](.+\.[^/]+?)([/].*?)?([#?].*)?$/

const isHashLink = to => HASH_PATTERN.test(to)

const InternalLink = styled.a`
  .is-glossary {
    white-space: nowrap;
  }
  &.active {
    color: ${props => props.theme.colors.primary};
  }
  &:hover {
    svg {
      fill: ${props => props.theme.colors.primary};
      transition: transform 0.1s;
      transform: scale(1.2);
    }
  }
`

const GlossaryIcon = styled(Icon)`
  margin: 0 0.25rem 0 0.35rem;
  fill: ${props => props.theme.colors.primary400};
  text-decoration: underline;
  &:hover {
    transition: transform 0.1s;
    transform: scale(1.2);
  }
`

const Link = ({ to, href, children, className, isPartiallyActive = true }) => {
  // markdown pages pass `href`, not `to`
  to = to || href

  const isHash = isHashLink(to)
  const isGlossary = to.includes("glossary")
  const isStatic = to.includes("static")

  // Must use <a> tags for anchor links
  // Otherwise <Link> functionality will navigate to homepage
  // See https://github.com/gatsbyjs/gatsby/issues/21909
  if (isHash) {
    return (
      <a className={className} href={to}>
        {children}
      </a>
    )
  }

  // Links to static image assets must use <a> to avoid
  // <Link> redirection. Opens in separate window.
  if (isStatic) {
    return (
      <a
        className={className}
        href={to}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }

  return (
    <InternalLink
      className={isGlossary ? `is-glossary ${className}` : className}
      to={to}
      activeClassName="active"
      partiallyActive={isPartiallyActive}
    >
      {children}
      {isGlossary && (
        <GlossaryIcon aria-label="See definition" size="12px" name="glossary" />
      )}
    </InternalLink>
  )
}

export default Link
