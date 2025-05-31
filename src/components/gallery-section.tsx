import { Component } from "solid-js";
import Container from "./container";
import IMG_1 from "./../assets/g-1.jpg";
import IMG_2 from "./../assets/g-2.jpg";
import IMG_3 from "./../assets/g-3.jpg";
import IMG_4 from "./../assets/g-4.jpg";
import IMG_5 from "./../assets/g-5.jpg";
import IMG_6 from "./../assets/g-6.jpg";
import IMG_7 from "./../assets/g-7.jpg";
import IMG_8 from "./../assets/g-8.jpg";
import IMG_9 from "./../assets/g-9.jpg";
import IMG_10 from "./../assets/g-10.jpg";
import IMG_11 from "./../assets/g-11.jpg";
import IMG_12 from "./../assets/g-12.jpg";
import { A } from "@solidjs/router";

const GALLARY = [
  [IMG_1, IMG_2, IMG_3],
  [IMG_4, IMG_5, IMG_6],
  [IMG_7, IMG_8, IMG_9],
  [IMG_10, IMG_11, IMG_12],
];

const GallerySection: Component = () => {
  return (
    <section class="relative w-full overflow-x-hidden">
      <Container class="py-[130px] flex flex-col items-center" size="lg">
        <h2 class="text-dark-1 text-base uppercase font-bold mb-1.5">
          Our Services
        </h2>
        <h4 class="font-pacifico text-dark text-[42px] font-normal text-center">
          Catering Flavors, Hosting <span class="text-primary">Smiles</span>
        </h4>

        <div class="mt-[50px] grid grid-cols-2 md:grid-cols-4 gap-6">
          {GALLARY.map((row) => (
            <div class="grid gap-5">
              {row.map((img, imgIndex) => (
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src={img}
                    alt={`Gallery Image ${imgIndex + 1}`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        <div class="mt-12">
          <A
            class="font-pacifico text-xl text-center hover:text-primary hover:underline cursor-pointer"
            href="https://www.facebook.com/foodbuspartycenter/"
            target="_blank"
          >
            <button class="btn btn-primary mt-10">View More on Facebook</button>
          </A>
        </div>
      </Container>
    </section>
  );
};

export default GallerySection;
