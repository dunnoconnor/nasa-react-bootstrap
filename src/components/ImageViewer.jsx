import nasa_pic from '../static_nasa.jpeg';
import { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';

function ImageViewer() {
    const [img, setImg] = useState({});

    useEffect(() => {
        fetchImg();
    }, [])

    async function fetchImg() {
        const url = new URL('/planetary/apod', 'https://api.nasa.gov')
        url.searchParams.set('api_key', process.env.REACT_APP_API_KEY)
        url.searchParams.set('date', '2023-07-04')
        console.log(url.toString())
        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            setImg(data)
          } catch (error) {
            console.error(error);
          }
    }

    return (
        <Image src={img.url} alt="daily nasa" rounded/>
    );
}

export default ImageViewer;