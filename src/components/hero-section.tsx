import { Component } from "solid-js";
import HeroBG from "../assets/hero-bg.jpg";
import Container from "./container";

const HeroSection: Component = () => {
  return (
    <section
      class="relative w-full h-screen bg-center bg-cover bg-fixed before:absolute before:inset-0 before:z-[1] flex justify-center items-center text-white after:absolute after:inset-0 after:z-[2] after:bg-linear-to-t after:from-transparent after:to-black/80 overflow-hidden"
      style={{ "background-image": `url(${HeroBG})` }}
    >
      <Container
        class="flex flex-col justify-center items-center h-full z-[3]"
        size="sm"
      >
        <h1 class="-mt-5 font-pacifico text-white md:text-[80px] leading-[143.75%] font-normal text-center">
          <span class="text-primary">Celebrate</span> in Style
          <br /> at Food Bus Party Center
        </h1>
      </Container>
    </section>
  );
};

export default HeroSection;
