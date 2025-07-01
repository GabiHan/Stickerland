// app/homepage/page.jsx
"use client";

import Navbar from "../components/navbar";
import Header from "../components/header";
import SectionOne from "../components/sectionOne";
import Sectiontwo from "../components/sectiontwo";
import Transition from "../components/transition";
import PopularStickers from "../components/PopularStickers";
import New from "../components/new";
import Footer from "../components/footer";
import Fade from "../components/fade"
import { useRouter } from "next/navigation";



export default function Homepage() {
  const router = useRouter();

  return (
 <>
      <Navbar />
      <Header />
      <main className="max-w-7xl mx-auto">
        <Fade><SectionOne /></Fade>

        <div className="w-full h-px bg-black my-8"></div>

        <Fade delay={0.1}><Transition /></Fade>
        <br /><br />
        <Fade delay={0.2}><Sectiontwo /></Fade>
        <br /><br /><br />
        <Fade delay={0.3}><PopularStickers /></Fade>
        <Fade delay={0.4}><New /></Fade>
        
      </main>
      <Footer />
    </>
  );
}
