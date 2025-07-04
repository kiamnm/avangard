import "./globals.css";
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css'; 
import HomeHeader from "@/components/client/homeHeader/HomeHeader";
import BestStylist from "@/components/client/bestStylist/BestStylist";

import DesktopNavbar from "@/components/client/desktopNavbar/DesktopNavbar";

export default function Home() {
  return (
    <div className="home-page-container bg_color_body" >
      <DesktopNavbar></DesktopNavbar>
      <HomeHeader></HomeHeader>
      <BestStylist></BestStylist>
    </div>
  );
}
