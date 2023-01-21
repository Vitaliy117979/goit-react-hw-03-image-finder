import { ImageGalleryItem } from "./ImageGalleryItem"

export const ImageGallery= ({images}) => {
    return (
<ul className="ImageGallery">
{images.map(image => 
      <ImageGalleryItem key={image.id} image={image}></ImageGalleryItem>
        )}
</ul>

    )
}