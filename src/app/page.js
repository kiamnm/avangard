import "./globals.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeHeader from "@/components/client/homeHeader/HomeHeader";
import BestStylist from "@/components/client/bestStylist/BestStylist";

import DesktopNavbar from "@/components/client/desktopNavbar/DesktopNavbar";
import NearestSalon from "@/components/client/nearestSalon/NearestSalon";
import ServiceMenu from "@/components/client/serviceMenu/ServiceMenu";
import AmazingOffer from "@/components/client/amazingOffer/AmazingOffer";
import PortfolioGallery from "@/components/client/portfolioGallery/PortfolioGallery";
import NewestProduct from "@/components/newestProduct/NewestProduct";
import Academy from "@/components/academy/Academy";
import PopularProduct from "@/components/client/popularProduct/PopularProduct";
import NewestAd from "@/components/client/newestAd/NewestAd";
import PopularCourse from "@/components/client/popularCourse/PopularCourse";
import Footer from "@/components/client/footer/Footer";
import DownMenu from "@/components/client/downMenu/DownMenu";


export default function Home() {
  return (
    <div className="home-page-container bg_mode_semiWhite">
      <DesktopNavbar></DesktopNavbar>
      {/* <HomeHeader></HomeHeader> */}
      <BestStylist></BestStylist>
      <NearestSalon></NearestSalon>
      <ServiceMenu></ServiceMenu>
      <AmazingOffer></AmazingOffer>
      <PortfolioGallery></PortfolioGallery>
      <NewestProduct></NewestProduct>
      <PopularProduct></PopularProduct>
      <Academy></Academy>
      <NewestAd></NewestAd>
      <PopularCourse></PopularCourse>
      <Footer></Footer>
      <DownMenu></DownMenu>

      
      
    </div>
  );
}
