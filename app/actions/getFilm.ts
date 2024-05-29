
export const getFilm = (id:number):Promise<FilmResponse> =>{
	return fetch(`https://swapi.tech/api/films/${id}`
	// , {
		// cache: `force-cache`  //SSG - Static Site Generation - getStaticProps - default mode
		// cache: `no-cache`  //SSR - Server-side rendering - getServerSideProps
		// next: {revalidate: 60}  //ISR - getStaticProps and revalidate
	// }
)
	.then(res => res.json())
} 