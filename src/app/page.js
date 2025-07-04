import "./globals.css";
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css'; 
import HomeHeader from "@/components/client/homeHeader/HomeHeader";

import DesktopNavbar from "@/components/client/desktopNavbar/DesktopNavbar";

export default function Home() {
  return (
    <div className="home-page-container" >
      <DesktopNavbar></DesktopNavbar>
      <HomeHeader></HomeHeader>
    </div>
  );
}
