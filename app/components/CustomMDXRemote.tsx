import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'

const components = {
  h1: (props:any) => (
    <h1 {...props} className="text-red-700 font-bold text-3xl">
      {props.children}
    </h1>
  ),
}

const options = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [rehypeSlug]
  }
}

export function CustomMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      options = {options}
    />
  )
}