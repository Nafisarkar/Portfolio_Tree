import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ReactLenis } from "lenis/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReactLenis
      root
      options={{
        lerp: 0.08, // Much lower for ultra-smooth interpolation
        duration: 2.2, // Longer duration for more graceful animation
        smoothWheel: true,
        smoothTouch: true,
        touchMultiplier: 1.5,
        wheelMultiplier: 0.6, // Lower for more controlled scrolling
        normalizeWheel: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease-out
        infinite: false,
        gestureOrientation: "vertical",
      }}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </ReactLenis>
  </StrictMode>
);
