import React, { useState, useEffect } from "react";
import axios from "axios";
import Dish from "./Dish";

function Gallery() {

        const [imageFiles, setImageFiles] = useState([]);

        useEffect(() => {

            const imageFilenames = ['image1.jpg', 'image8.jpg', 'image6.jpg', 'image9.jpg',
                                            'image5.jpg', 'image7.jpg', 'image3.jpg', 'image2.jpg', 'image4.jpg'];

            Promise.all(
                imageFilenames.map(filename =>
                    import(`../imagesForGallery/${filename}`).then(image => ({
                        filename,
                        src: image.default
                    }))
                )
            ).then(images => setImageFiles(images));
        }, []);

        const handleImageClick = () => {
            console.log('image clicked')
        }

    return (
        <div className='gallery' id='gallery'>
            {imageFiles.map(image => (
                <div onClick={handleImageClick}><img src={image.src} alt={image.filename} /></div>
            ))}
        </div>
    )
}

export default Gallery;
