import "./globals.css";
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css'; 

import DesktopNavbar from "@/components/client/desktopNavbar/DesktopNavbar";

export default function Home() {
  return (
    <div className="home-page-container" >
      <DesktopNavbar></DesktopNavbar>
    </div>
  );
}
