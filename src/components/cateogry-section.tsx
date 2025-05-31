import { Component, createSignal, For } from "solid-js";
import IMG_1 from "../assets/cat-1.jpg";
import IMG_2 from "../assets/cat-2.jpg";
import IMG_3 from "../assets/cat-3.jpg";
import IMG_4 from "../assets/cat-4.jpg";
import Container from "./container";

const FoodCard = [
  {
    src: IMG_1,
    title: "Bangladeshi",
    description:
      "Traditional Bangladeshi cuisine with a variety of flavors and spices.",
  },
  {
    src: IMG_2,
    title: "Chinese & Thai",
    description:
      "A fusion of Chinese and Thai dishes, offering a unique culinary experience.",
  },
  {
    src: IMG_3,
    title: "Fast Food",
    description: "Quick and delicious fast food options for those on the go.",
  },
  {
    src: IMG_4,
    title: "Desserts",
    description: "Indulge in a variety of sweet treats and desserts.",
  },
];

const CategoryCard: Component<{
  src: string;
  title: string;
  description?: string;
}> = ({ src, title }) => {
  return (
    <div class="relative w-full h-full" style={`background-image: url(${src})`}>
      <h3 class="absolute bottom-10 left-[100px] opacity-80 text-[80px] font-extrabold -rotate-90">
        {title}
      </h3>
      {/* <p class="text-sm text-gray-600">{description}</p> */}
    </div>
  );
};

const FoodCategorySection: Component = () => {
  const [categories] = createSignal(FoodCard);

  return (
    <section class="relative w-full h-[calc(100vh_/_1.05)] bg-dark overflow-hidden">
      <Container class="h-full w-full flex " size="full">
        <For each={categories()}>
          {(category) => <CategoryCard {...category} />}
        </For>
      </Container>
    </section>
  );
};

export default FoodCategorySection;
