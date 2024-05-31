import { MDXProvider } from '@mdx-js/react'
import { Element, Node } from "hast"
import { h } from 'hastscript'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import remarkDirective from 'remark-directive'
import { visit } from 'unist-util-visit'
import Hello from './Hello'

function myRemarkPlugin() {
  /**
   * @param {import('mdast').Root} tree
   *   Tree.
   * @returns {undefined}
   *   Nothing.
   */
  return function (tree: any) {
    visit(tree, function (node: Node | any) {
      if (
        node.type === 'containerDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'textDirective'
      ) {
        const data = node.data || (node.data = {})
        const hast = h(node.name, node.attributes || {}) as unknown as Element

        data.hName = hast.tagName
        data.hProperties = hast.properties
      }
    })
  }
}

const components = {
  h1: (props:React.ComponentProps<typeof MDXProvider>) => (
    <h1 {...props} className="text-red-700 font-bold text-3xl">
      {props.children}
    </h1>
  ),
  Hello
}

const options = {
  mdxOptions: {
    remarkPlugins: [remarkDirective, myRemarkPlugin],
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