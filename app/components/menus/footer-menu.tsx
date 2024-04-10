import type { ComponentPropsWithoutRef } from 'react'

import Link from '@/components/primitives/Link'
import { css } from 'styled-system/css'
import { columnsMenu } from 'styled-system/recipes'

const cls = columnsMenu()
const logoCls = {
  logosNav: css({
    marginBottom: '6',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2',
    fontSize: 'xs',
    lineHeight: 'xs',
    color: 'accent.12/80',
    sm: {
      marginBottom: 0,
    },
  }),
  logo: css({
    opacity: 0.95,
    mixBlendMode: 'luminosity',
    '&:hover': {
      opacity: 1,
    },
  }),
  logoImg: css({
    objectFit: 'contain',
    lg: {
      width: '48',
      height: '24',
    },
  }),
  socials: css({
    marginBottom: '6',
    display: 'flex',
    gap: '4',
    textAlign: 'center',
    '& a:hover': {
      color: 'accent.12',
    },
  }),
}

type LayoutFooterProps = {} & Omit<ComponentPropsWithoutRef<'div'>, 'children' | 'className'>

export default function FooterMenu(props: LayoutFooterProps) {
  const currentYear = new Date().getFullYear()
  const links = {
    website: 'https://itsjavi.com',
    twitter: 'https://twitter.com/itsjavidev',
    github: 'https://github.com/itsjavi/remix-park-ui',
  }

  return (
    <div className={cls.root} {...props}>
      <nav className={cls.menu}>
        <div className={logoCls.logosNav}>
          <div>
            <Link href="/" title="Homepage" className={logoCls.logo}>
              <img src="/logo-outline.png" alt="Logo" height="72" width="128" />
            </Link>
          </div>
          <div className={logoCls.socials}>
            <a title="Discord" href={links.website} target="_blank" rel="noreferrer">
              Website
            </a>
            <a title="Twitter / X" href={links.twitter} target="_blank" rel="noreferrer">
              X
            </a>
            <a title="Github" href={links.github} target="_blank" rel="noreferrer">
              Github
            </a>
          </div>
        </div>
        <div>
          <h2 className={cls.title}>Product</h2>
          <ul className={cls.list}>
            <li>
              <Link href="/">Feature 1</Link>
            </li>
            <li>
              <Link href="/">Feature 2</Link>
            </li>
            <li>
              <Link href="/">Feature 3</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className={cls.title}>Company</h2>
          <ul className={cls.list}>
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/">Careers</Link>
            </li>
            <li>
              <Link href="/">FAQ</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className={cls.title}>Developers</h2>
          <ul className={cls.list}>
            <li>
              <Link href="/">Source Code</Link>
            </li>
            <li>
              <Link href="/">Roadmap</Link>
            </li>
            <li>
              <Link href="/">Report an issue</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className={cls.title}>Policies</h2>
          <ul className={cls.list}>
            <li>
              <Link href="/terms-of-service">Terms of Service</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/cookies">Cookie Settings</Link>
            </li>
            <li>
              <Link href="/licenses">Licenses</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className={cls.bottomBanner}>
        &copy; ACME 2021-{currentYear}.<Link href="/">[more]</Link>
      </div>
    </div>
  )
}
