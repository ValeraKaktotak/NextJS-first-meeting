import { useEffect, useState } from 'react'

export const useReadingProgressBar = () => {
 const [myCompletion, setMyCompletion] = useState(0);

 useEffect(() => {
	const updateScrollCompletion = () => {
		const actualPosition = window.scrollY;
		const scrollHeight = document.body.scrollHeight - window.innerHeight;
		const percentage = (actualPosition / scrollHeight) * 100;
		setMyCompletion(percentage);
	};

	window.addEventListener("scroll", updateScrollCompletion);

	return () => {
		window.removeEventListener("scroll", updateScrollCompletion);
	};
}, []);
 
 return myCompletion
}
