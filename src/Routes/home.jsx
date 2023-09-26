import React,{useEffect} from "react";
import Nav from "../section/nav"
import Main from "../section/main";
import About from "../section/about";
import Cards from "../section/Cards";
import Institute from "../section/institute";
import Podcast from "../section/podcast";
import Contact from "../section/contact";
import Footer from "../section/footer";
import AOS from 'aos';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in milliseconds)
      easing: 'ease-in-out', // Animation easing
    });
  }, []);
  return (
    <>
      <div className="flex flex-col items-center">
        <Nav/>
        <Main />
        <About />
        <Cards />
        <Institute />
        <Podcast />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
