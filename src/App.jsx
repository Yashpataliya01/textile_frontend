// react library imports
import { Suspense, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";

// animation libraries
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

// import routes
import { routes } from "./routes/Routes";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // longer duration for more noticeable animation
      offset: 100, // start the animation 100px before it comes into view
      easing: "ease-out-quart",
      once: false, // set to false if you want animations to repeat on scroll
      mirror: true, // animate on scroll up as well
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="scroll-smooth"
    >
      <Suspense>
        <RouterProvider router={routes} />
      </Suspense>
    </motion.div>
  );
}

export default App;
