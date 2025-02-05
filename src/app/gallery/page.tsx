import "./gallery.css"

import Banner from "@/components/Banner/banner"

export default function Gallery() {
  return (
    <div className="gallery__wrapper">
      <Banner 
        title="Gallery" 
        subtitle="Photos and small works" 
        image="/banner.gallery.png"
      />
    </div>
  );
}
