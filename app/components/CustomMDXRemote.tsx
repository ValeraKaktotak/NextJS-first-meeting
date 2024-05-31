import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
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
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
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