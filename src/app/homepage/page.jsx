// app/homepage/page.jsx
"use client";

import Navbar from "../components/navbar";
import Header from "../components/header";
import About from "../components/about";
import Team from "../components/team";
import PopularStickers from "../components/PopularStickers";
import New from "../components/new";
import Footer from "../components/footer";
import Fade from "../components/fade";
import AbGallery from "../components/abGallery";
import { useRouter } from "next/navigation";



export default function Homepage() {
  const router = useRouter();

  return (
 <>
      <Navbar />
      <Header />
      <main className="max-w-7xl mx-auto">
        <Fade><About /></Fade>

        <div className="h-20"></div> 
        <div className="w-full h-px bg-black my-8"></div>

        <div className="h-20"></div> 
        <Fade delay={0.2}>
        <br />
        </Fade>
        <Fade delay={0.2}><Team /></Fade>

        <div className="h-20"></div> 
        <AbGallery />
        <Fade delay={0.3}><PopularStickers /></Fade>

        <div className="h-20"></div>
        <Fade delay={0.4}><New /></Fade>
        
      </main>
      <Footer />
    </>
  );
}
