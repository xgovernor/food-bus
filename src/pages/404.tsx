import type { Component } from "solid-js";

import Navbar from "../components/navbar";
import HeroSection from "../components/hero-section";
import ServicesSection from "../components/services-section";
import FoodCategorySection from "../components/cateogry-section";
import TestimonialSection from "../components/testimonial-section";
import AboutSection from "../components/about-section";
import GallerySection from "../components/gallery-section";
import Footer from "../components/footer";
import { A } from "@solidjs/router";

const Home: Component = () => {
  return (
    <>
      <section class="w-full h-screen">
        <div class="">
          <h1>Opps! 404</h1>
          <p>Page not found</p>
          <A href="/" hreflang="en">
            Go to Home
          </A>
        </div>
      </section>
    </>
  );
};

export default Home;
