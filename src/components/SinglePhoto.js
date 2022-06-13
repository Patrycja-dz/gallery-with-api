import React from "react";

const SinglePhoto = ({ url, description, author, data }) => {
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
      <div className="gallery-content">
        <figure className="gallery-figure">
          <img src={url} alt="" className="gallery-image" />
         <div className="gallery-shadow">
         <figcaption className="gallery-figcaption">{description}
          <p>
            by <sub>{author}</sub> on <sub>{data}</sub>
          </p>
          </figcaption>
         </div>
         
        </figure>
      </div>
    </>
  );
};

export default SinglePhoto;
