import type { Component } from "solid-js";

import Navbar from "../components/navbar";
import HeroSection from "../components/hero-section";
import ServicesSection from "../components/services-section";
import FoodCategorySection from "../components/cateogry-section";
import TestimonialSection from "../components/testimonial-section";
import AboutSection from "../components/about-section";
import GallerySection from "../components/gallery-section";
import Footer from "../components/footer";

const Home: Component = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <FoodCategorySection />
      <AboutSection />
      <TestimonialSection />
      <GallerySection />
      <Footer />
    </>
  );
};

export default Home;
