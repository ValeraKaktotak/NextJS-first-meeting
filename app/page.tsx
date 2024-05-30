import { CustomMDX } from './components/CustomMDXRemote'

export default function Home() {
  const source = `# Some **mdx** text
  This is from server components!`

  return (
    <CustomMDX source={source} />
  )
}
