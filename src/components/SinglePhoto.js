import React from "react";

const SinglePhoto = ({ url, description, author, data, alt }) => {
  // const truncate = (str) => {
  //   if (str === null) {
  //     str = "Lorem ipsum";
  //   } else if (str.length > 20) {
  //     return str.substr(0, 18) + "&hellip;";
  //   } else {
  //     return str;
  //   }
  // };
  //  const [isDescription, setDescription] = useState('')

  return (
    <>
        <figure className="gallery-figure">
          <img src={url} className="gallery-image"  alt = {alt}/>
          <p>by<sub>{author}</sub> on <sub>{data}</sub></p>
         <figcaption className="gallery-figcaption">{description}</figcaption>
        </figure>
    </>
  );
};

export default SinglePhoto;
