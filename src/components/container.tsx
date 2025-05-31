import { Component, JSX, JSXElement } from "solid-js";

export type ContainerProps = JSX.IntrinsicElements["div"] & {
  class?: string;
  children: JSXElement;
  size?: "sm" | "md" | "lg" | "full";
};

const Container: Component<ContainerProps> = ({
  class: className,
  children,
  size = "md",
  ...props
}) => {
  return (
    <div
      class={`w-full mx-auto box-content ${className}`}
      classList={{
        "px-4": size !== "full",
        "max-w-[908px]": size === "sm",
        "max-w-[1030px]": size === "md",
        "max-w-[1240px]": size === "lg",
        "max-w-full": size === "full",
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
