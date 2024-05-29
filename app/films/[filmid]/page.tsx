import { getAllFilms } from '@/app/actions/getAllFilms'
import { getFilm } from '@/app/actions/getFilm'
import type { FC } from 'react'

interface IFilm {
	params:{
		filmid:number
	}
}

const FilmPage: FC<IFilm> = async ({params}) => {
	const filmData = await getFilm(params.filmid)

	return (
		<div>{filmData.result.properties.title}</div>
	)
}

export async function generateStaticParams(){
	const films = await getAllFilms()

	return films.result.map(film => ({
		filmid: film.uid
	}))
}
 
export default FilmPage