import "./portfolio.module.css"

import Banner from "@/components/Banner/banner"
import PortfolioMain from "@/components/PortfolioMain/portfolio-main"

export default function Portfolio() {
  return (
    <div>
      <Banner 
        title="Portfolio" 
        subtitle="Code works, notion templates and others" 
        image="/banner.portfolio.png"
      />
      <PortfolioMain />
    </div>
  );
}
