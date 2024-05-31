import { CustomMDX } from './components/CustomMDXRemote'

export default function Home() {
  const source = `# Some **mdx** text
  This is from server components!
  # Some **mdx** text №2
  
  :::section{#readme}

  Lorem:br
  ipsum.

  ::hr{.red}

  A :i[lovely] language know as :abbr[HTML]{title="HyperText Markup Language"}.

  <Hello />
  ::: 
  `

  return (
    <CustomMDX source={source} />
  )
}
