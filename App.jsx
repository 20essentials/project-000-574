import React from "react";
import { createRoot } from "react-dom/client";
import { setup, tw } from "twind";

setup({});

const App = () => {
  return (
    <section
      className={tw`
        fixed inset-0 z-10 bg-[url('assets/image.avif')] bg-cover
        before:absolute before:inset-0 before:z-11 before:bg-[url('assets/splash.avif')] before:bg-center before:bg-cover before:mix-blend-screen
        after:absolute after:inset-0 after:z-12 after:bg-gradient-to-r after:from-transparent after:via-white/30 after:to-transparent after:opacity-0
        hover:after:[animation:move_1s_linear_both]
      `}
    ></section>
  );
};

const rootElement = document.createElement("div");
document.body.appendChild(rootElement);
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const style = document.createElement("style");
style.textContent = `
@keyframes move {
  0% { opacity: 1; transform: translateX(-100%); }
  100% { opacity: 1; transform: translateX(100%); }
}
`;
document.head.appendChild(style);
