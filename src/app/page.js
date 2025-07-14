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


export default function Home() {
  return (
    <div className="home-page-container bg_default">
      <DesktopNavbar></DesktopNavbar>
      <HomeHeader></HomeHeader>
      <BestStylist></BestStylist>
      <NearestSalon></NearestSalon>
      <ServiceMenu></ServiceMenu>
      <AmazingOffer></AmazingOffer>
      <PortfolioGallery></PortfolioGallery>

      <div className="pt-5">
<h1 className="sansThin bg-primary">سلام چطوری؟ این تست برای فونت است</h1>

      <h1 className="sansLight bg_accent_1">سلام چطوری؟ این تست برای فونت است</h1>
      <h1 className="sansRegular bg_accent_2">سلام چطوری؟ این تست برای فونت است</h1>
      <h1 className="sansMedium bg_default">سلام چطوری؟ این تست برای فونت است</h1>
      <h1 className="sansSemiBold bg_surface">سلام چطوری؟ این تست برای فونت است</h1>
      <h1 className="sansBold bg_text">سلام چطوری؟ این تست برای فونت است</h1>
      <h1 className="sansExtraBold">سلام چطوری؟ این تست برای فونت است</h1>
      <h1 className="sansBlack">سلام چطوری؟ این تست برای فونت است</h1>
      <h1 className="sansExtraBlack">سلام چطوری؟ این تست برای فونت است</h1>

      <h1 className="sansThinNum">سلام 123456789</h1>
      <h1 className="sansLightNum">سلام 123456789</h1>

      <h1 className="sansRegularNum" >سلام 123456789</h1>

      <h1 className="sansMediumNum" >سلام 123456789</h1>

      <h1 className="sansSemiBoldNum" >سلام 123456789</h1>

      <h1 className="sansBoldNum">سلام 123456789</h1>

      <h1 className="sansExtraBoldNum" >سلام 123456789</h1>

      <h1 className="sansBlackNum" >سلام 123456789</h1>

      <h1 className="sansExtraBlackNum" >سلام 123456789</h1>
      </div>
      
    </div>
  );
}
