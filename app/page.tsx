import Nav from "@/comps/Nav";
import Banner from "@/comps/Banner";
import Footer from "@/comps/Footer";
import About from "@/comps/About";
import Projects from "@/comps/Projects";
// import Experience from "@/comps/Experience";
import Contact from "@/comps/Contact";



export default function App() { 
    return (
      <>
      <Nav />
      <Banner />
      <About />
      <Projects />
      {/* <Experience /> */}
      <Contact />
      <Footer />
      </>
    );
}
