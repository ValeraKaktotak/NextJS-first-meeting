
export const getAllFilms = ():Promise<FilmsResponse> =>{
	return fetch('https://swapi.tech/api/films', {
		// cache: `force-cache`  //SSG - Static Site Generation - getStaticProps - default mode
		// cache: `no-cache`  //SSR - Server-side rendering - getServerSideProps
		// next: {revalidate: 60}  //ISR - getStaticProps and revalidate
	})
	.then(res => res.json())
} 