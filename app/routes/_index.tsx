import type { MetaFunction } from '@remix-run/node'
import { article } from 'styled-system/recipes'

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }]
}

const cls = article()

export default function Index() {
  return (
    <article className={cls.root}>
      <section className={cls.prose}>
        <h1>Welcome to Remix</h1>
        <ul>
          <li>
            <a target="_blank" href="https://remix.run/tutorials/blog" rel="noreferrer">
              15m Quickstart Blog Tutorial
            </a>
          </li>
          <li>
            <a target="_blank" href="https://remix.run/tutorials/jokes" rel="noreferrer">
              Deep Dive Jokes App Tutorial
            </a>
          </li>
          <li>
            <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
              Remix Docs
            </a>
          </li>
        </ul>
      </section>
    </article>
  )
}
