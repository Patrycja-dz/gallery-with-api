import React from "react";

const SinglePhoto = ({ image }) => {
  const dates = image.created_at.substr(0, 10);

  const formatDate = (isoDate) =>{
    const date = isoDate.split('T')[0]
    const [year,month,day] = date.split('-');
   return [day,month,year].join('/')
  }
  
  const description = image.description;

  const result =
    description === null
      ? "Lorem ipsum ...."
      : description.substr(0, 25) + " ...";

  return (
    <>
      <figure className="gallery-figure">
        <img
          src={image.urls.small}
          className="gallery-image"
          alt={image.alt_description}
        />
        <p key={image.id}>
          by{" "}
          <sub className="author">
            <a href={image.user.portfolio_url}>{image.user.name}</a>
          </sub>{" "}
          on <sub className="date">{formatDate(dates)}</sub>
        </p>
        <figcaption className="gallery-figcaption">{result}</figcaption>
      </figure>
    </>
  );
};

export default SinglePhoto;
