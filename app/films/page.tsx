import Link from 'next/link'
import type { FC } from 'react'
import { getAllFilms } from '../actions/getAllFilms'

const FilmsPage: FC = async() => {
	const allFilms = await getAllFilms()

	return (
		<div className='container mx-auto mt-4'>
			<h2 className='mb-2 text-lg font-semibold text-gray-900 dark:text-white'>Films list:</h2>
			<ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400'>
				{allFilms.result.map(film=>(
					<li key={film._id}>
						<Link href={`/films/${film.uid}`}>{film.properties.title}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default FilmsPage