import axios from "axios";
import React, { useState, useEffect } from "react";
import SinglePhoto  from "../components/SinglePhoto";

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&count=4`
        );
        setImages(response.data);
        console.log(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    fetchImages();
  }, []);


  return (
    <>
      <div className="gallery">
      {images && images.map(image => (
        <div className="gallery-wrapper" key={image.id}>
         <SinglePhoto url={image.urls.small} alt={image.alt_description} description = {image.description} author={image.user.name} data={image.created_at}/>
    </div>
       ))}
      </div>
    </>
  );
}

export default Gallery;
