
export async function generateStaticParams() {
  const films = await fetch('https://swapi.dev/api/films').then((res) => res.json())
 
  return films.results.map((film: any) => ({
    slug: film.title.replace(/\s+/g, '-'),
  }))
}

const Post = ({params}: any) => {

	return (
		<div>Post page id {params.slug}</div>
	)
}

export default Post