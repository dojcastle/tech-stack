import React, { useRef } from "react";
import { ReactComponent as ArrowIcon } from "../../icons/icon-arrow.svg";
import Icon from "../Icon";

interface AccordionProps {
  children?: React.ReactNode;
  title: string;
  variant?: "row" | "column";
  color?: string;
  arrow?: boolean;
  parent?: boolean;
  style?: React.CSSProperties;
  isOpen?: boolean;
  fullWidth?: boolean;
  background?: string;
  "data-section"?: string;
}

export default function Accordion(props: AccordionProps) {
  const {
    arrow = true,
    parent = false,
    isOpen = false,
    fullWidth = false,
    style = {},
    background,
    color,
    title,
    children,
  } = props;
  const accordionRef = useRef<HTMLDivElement>(null);

  const toggleContent = () => {
    if (!accordionRef.current) return;
    const contains = accordionRef.current.classList.contains("is-closed");
    if (contains) {
      accordionRef.current.classList.add("is-open");
      accordionRef.current.classList.remove("is-closed");
      if (
        accordionRef.current.getAttribute("data-section") === "Applications"
      ) {
        document
          .querySelectorAll("[data-section=Applications]")
          .forEach((element) => {
            element.classList.remove("is-closed");
            element.classList.add("is-open");
          });
      }
    } else {
      accordionRef.current.classList.remove("is-open");
      accordionRef.current.classList.add("is-closed");
    }
  };

  return (
    <div
      ref={accordionRef}
      {...(props["data-section"]
        ? { "data-section": props["data-section"] }
        : {})}
      className={[
        "accordion",
        parent ? "parent" : "",
        color ? "themed" : "",
        !isOpen ? "is-closed" : "is-open",
        fullWidth ? "full-width" : "",
      ]
        .join(" ")
        .trim()}
      style={{
        background: background ? background : color + "1a",
        color,
        ...style,
        ...(fullWidth
          ? {
              flex: "100%",
            }
          : {}),
      }}
    >
      <div className="title" onClick={toggleContent}>
        <b style={{ color }}>{title}</b>
        {arrow && <Icon icon={<ArrowIcon />} />}
      </div>
      <div className="content">{children}</div>
    </div>
  );
}
