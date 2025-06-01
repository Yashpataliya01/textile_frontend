import { Suspense, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWhatsapp } from "react-icons/fa"; // import WhatsApp icon
import "./App.css";

import { routes } from "./routes/Routes";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 100,
      easing: "ease-out-quart",
      once: false,
      mirror: true,
    });
  }, []);

  // WhatsApp URL with your number and a default message (optional)
  const whatsappNumber = "9413884119";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

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

      {/* WhatsApp floating icon */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={40} color="white" />
      </a>
    </motion.div>
  );
}

export default App;
