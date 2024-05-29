import type { FC } from 'react'

interface IPost {
	params: {
		id: string[]
	}
}

const PostDetail: FC<IPost> = ({params}) => {

	return (
		<div>Post page id {JSON.stringify(params)}</div>
	)
}

export default PostDetail