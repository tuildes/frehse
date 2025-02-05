import "./portfolio.module.css"

import Banner from "@/components/Banner/banner"

export default function Gallery() {
  return (
    <div>
      <Banner 
        title="Portfolio" 
        subtitle="Code works, notion templates and others" 
        image="/banner.portfolio.png"
      />
    </div>
  );
}
