import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'

const components = {
  h1: (props:any) => (
    <h1 {...props} className="text-red-700 font-bold text-3xl">
      {props.children}
    </h1>
  ),
}

export function CustomMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}