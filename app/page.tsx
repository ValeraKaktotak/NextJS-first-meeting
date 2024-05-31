import { CustomMDX } from './components/CustomMDXRemote'

export default function Home() {
  const source = `# Some **mdx** text
  This is from server components!
  # Some **mdx** text №2`

  return (
    <CustomMDX source={source} />
  )
}
