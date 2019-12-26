import React, {useContext} from 'react';
import ImagesContext from './UrlContext';
import Image from './Image';

const Gallery = () => {
  const imageUrls = useContext(ImagesContext);
  return (
    <div>
      <Image url={ imageUrls.firstUrl }/>
      <Image url={ imageUrls.secondUrl }/>
      <Image url={ imageUrls.thirdUrl }/>
    </div>
  )
}

export default Gallery;