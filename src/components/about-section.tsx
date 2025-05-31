import Container from "./container";
import ABOUT from "../assets/about.jpg";
import PHONE from "../assets/phone.svg";
import { Component } from "solid-js";

const AboutSection: Component = () => {
  return (
    <section class="relative w-full">
      <Container size="lg" class="py-[130px] flex gap-14">
        <div class="w-[523px] h-[465px]">
          <img
            src={ABOUT}
            alt="About"
            class="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div class="max-w-[625px] flex flex-col justify-between gap-10 py-[14px]">
          <div class="">
            <h2 class="text-base font-bold uppercase">About Us</h2>
            <p class="max-w-[486px] font-pacifico text-[42px] mb-7">
              Bringing People Together Through Food &{" "}
              <span class="text-primary">Festivities</span>
            </p>
            <p class="text-gray-600 text-lg mb-7">
              At Food Bus Restaurant and Party Center, we blend flavorful
              cuisine with unforgettable celebrations. Whether you're stopping
              by for a casual meal or hosting a grand event, we offer the
              perfect setting with warm hospitality, delicious dishes, and a
              vibrant atmosphere.
            </p>
          </div>

          <div class="flex gap-3">
            <div class="w-[55px] h-[55px] flex items-center justify-center bg-[#D9D9D9] rounded-md">
              <img class="w-7 h-7" src={PHONE} alt="Phone" />
            </div>
            <div class="flex flex-col gap-2">
              <p class="text-sm font-medium">Contact Us</p>
              <p>
                Call us at{" "}
                <a
                  class="hover:text-primary font-bold"
                  href="tel:+8801234786789"
                >
                  +880 1234-786789
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
