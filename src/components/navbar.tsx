import { Component, createSignal, For } from "solid-js";
import LOGO from "../assets/logo.png";
import { A } from "@solidjs/router";
import Container from "./container";

const MENU_ITEMS = [
  { name: "Party Center", path: "/party-center" },
  { name: "Restaurant", path: "/restaurant" },
  { name: "Menu", path: "/menu" },
];

const Navbar: Component = () => {
  const [menuItems] = createSignal(MENU_ITEMS);

  return (
    <header class="absolute top-0 w-full z-20">
      {/* <div class="w-full h-[80px] bg-black/50 backdrop-blur-sm fixed top-0 left-0 z-20"></div> */}
      <nav class="w-full">
        <Container
          class="py-[30px] grid grid-cols-[1fr_230px_1fr] items-center"
          size="lg"
        >
          <ul class="flex justify-start gap-x-12">
            <For each={menuItems()}>
              {(item, i) => (
                <li>
                  <a class="font-medium text-white" href={item.path}>
                    {item.name}
                  </a>
                </li>
              )}
            </For>
          </ul>

          <div class="flex justify-center items-center">
            <A href="/">
              <img
                class="h-[66px]"
                src={LOGO}
                alt="Food Bus Restaurant & Party Center"
              />
            </A>
          </div>

          <ul class="flex justify-end gap-x-12">
            <li>
              <a class="font-medium text-white" href={`tel:+8801234678900`}>
                Call for query <span>+880 1234-678900</span>
              </a>
            </li>
          </ul>
        </Container>
      </nav>
    </header>
  );
};

export default Navbar;
