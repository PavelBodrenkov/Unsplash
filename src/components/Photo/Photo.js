import "./Photo.css";

import {useEffect, useState} from 'react';
import {useParams, Link} from "react-router-dom";

function Photo({getPhoto}) {
  const [photoData, setPhotoData] = useState();

  const {id} = useParams();

  useEffect(() => {
    getPhoto(id)
      .then(setPhotoData)
      .catch(() => console.log('Error'))
  }, [id])

  if (!photoData) return null;

  const {title, subtitle, src} = photoData;

  return (
    <div className="photo">
      <Link className="photo-goback" to="/">⟵ Go back</Link>
      <img className="photo-image" src={src} alt={title} />
      <p className="photo-title">{title}</p>
      <p className="photo-subtitle">{subtitle}</p>
    </div>
  )
}

export default Photo;