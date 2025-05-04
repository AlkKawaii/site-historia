import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

export default function Button({
  onClick,
  children,
  width = "5em",
  height = "3em",
  to,
  type= "button",
}) {
  const buttonRef = useRef(null);
  const Component = to ? Link : "button";

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const fill = button.querySelector(`.${styles.fill}`);
    if (!fill) return;

    let animationFrameId;

    function resetFill(event) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        const rect = button.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        fill.style.clipPath = `circle(0% at ${x}px ${y}px)`;
      });
    }

    function setFill(event) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        const rect = button.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        fill.style.clipPath = `circle(80% at ${x}px ${y}px)`;
      });
    }

    button.addEventListener("mouseenter", resetFill);
    button.addEventListener("mousemove", setFill);
    button.addEventListener("mouseleave", resetFill);

    return () => {
      button.removeEventListener("mouseenter", resetFill);
      button.removeEventListener("mousemove", setFill);
      button.removeEventListener("mouseleave", resetFill);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <Component
      ref={buttonRef}
      className={styles.button}
      onClick={onClick}
      to={to}
      type={to ? null : type}
      style={{
        width,
        height,
        fontSize: `calc(${height} / 2.5)`,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <span>{children}</span>
      <div className={styles.fill}></div>
    </Component>
  );
}