import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <img
        src="images/gradient.jpg"
        className="absolute -top-[1rem] left-1/2 -ml-[40rem] max-w-[163.125rem] sm:-ml-[67.5rem]"
        aria-hidden="true"
      />
      <div
        className="grid-bg absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] bg-[url('../public/images/grid.svg')]"
        aria-hidden="true"
      ></div>
      <Header></Header>
      <Hero></Hero>
      <Footer></Footer>
    </>
  );
}
