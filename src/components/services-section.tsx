import Container from "./container";
import IMG_1 from "../assets/service-1.jpg";
import IMG_2 from "../assets/service-2.jpg";
import SHWARMA from "../assets/sharma.svg";
import FIREWORK from "../assets/fireworks.svg";
import { A } from "@solidjs/router";
import { Component } from "solid-js";

const ServiceCard = ({
  src,
  title,
  href,
}: {
  src: string;
  title: string;
  href: string;
}) => {
  return (
    <div class="max-w-[503px] flex flex-col gap-y-7 rounded-lg">
      <img src={src} alt={title} class="w-full h-auto rounded-lg" />
      <A
        href={href}
        class="font-pacifico text-[30px] font-normal text-[#281008] text-center"
      >
        {title}
      </A>
    </div>
  );
};

const ServicesSection: Component = () => {
  return (
    <section class="relative w-full overflow-x-hidden">
      <img
        src={SHWARMA}
        class="absolute top-[38px] -left-[52px] h-[494.67px] w-[446px]"
      />
      <img
        src={FIREWORK}
        class="absolute bottom-[10px] -right-[65px] w-[486px] h-[442.86px]"
      />

      <Container
        class="py-[130px] flex flex-col justify-center items-center h-full z-[2]"
        size="sm"
      >
        <h2 class="text-dark-1 text-base uppercase font-bold mb-1.5">
          Our Services
        </h2>
        <h4 class="font-pacifico text-dark text-[42px] font-normal text-center">
          Catering Flavors, Hosting <span class="text-primary">Smiles</span>
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <ServiceCard
            href="/restaurant"
            src={IMG_1}
            title="Dine in-Restaurant"
          />
          <ServiceCard href="/party-center" src={IMG_2} title="Party Center" />
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
