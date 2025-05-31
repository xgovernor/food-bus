import { Component } from "solid-js";
import HeroBG from "../assets/hero-bg.jpg";
import Container from "./container";

const HeroSection: Component = () => {
  return (
    <section
      class="w-full h-screen bg-center bg-cover bg-fixed before:absolute before:inset-0 before:bg-black/50 before:z-1 flex justify-center items-center text-white relative"
      style={{ "background-image": `url(${HeroBG})` }}
    >
      <Container
        class="flex flex-col justify-center items-center h-full z-[2]"
        size="sm"
      >
        <h1 class="font-pacifico text-white  md:text-[80px] leading-[143.75%] font-normal text-center">
          <span class="text-primary">Celebrate</span> in Style
          <br /> at Food Bus Party Center
        </h1>
      </Container>
    </section>
  );
};

export default HeroSection;
