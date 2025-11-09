import React from 'react'
import { useTheme } from 'next-themes'

const useDark = () => {
  const { resolvedTheme } = useTheme()
  const [isDark, setIsDark] = React.useState(false)
  React.useEffect(() => {
    setIsDark(resolvedTheme === 'dark')
  }, [resolvedTheme])
  return isDark
}

const config = {
  project: {
    link: 'https://github.com/CommandAGI/sessh',
  },
  editLink: {
    text: 'Edit this page on GitHub',
  },
  feedback: {
    content: 'Question? Give us feedback →',
  },
  toc: {
    float: true,
  },
  docsRepositoryBase: 'https://github.com/CommandAGI/sessh-docs/blob/main',
  useNextSeoProps() {
    return {
      titleTemplate: '%s | Sessh',
    }
  },
  logo: function Logo() {
    const isDark = useDark()
    return (
      <>
        <span className='w-full font-bold'>Sessh</span>
      </>
    )
  },
  head: function Head({ title, frontMatter }) {
    return (
      <>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='og:type' content='website' />
        <meta name='og:title' content={title} />
        <meta name='og:description' content={frontMatter?.description} />
        <meta property='og:site_name' content='Sessh' />
      </>
    )
  },
}

export default config
