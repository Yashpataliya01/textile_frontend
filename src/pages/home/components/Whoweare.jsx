import { useEffect, useRef, useState } from "react";
import { useSpring, useTrail, animated } from "@react-spring/web";

const AnimatedCounter = ({
  value,
  suffix = "",
  prefix = "",
  label,
  duration = 1000,
}) => {
  const [visible, setVisible] = useState(false);
  const [randomizing, setRandomizing] = useState(false);
  const [displayValue, setDisplayValue] = useState(0);
  const counterRef = useRef(null);
  const animationRef = useRef(null);

  const { number } = useSpring({
    from: { number: 0 },
    to: { number: visible ? value : 0 },
    config: { tension: 170, friction: 26, duration },
    delay: randomizing ? duration : 0,
  });

  const bounceAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(40px) scale(0.9)" },
    to: {
      opacity: visible ? 1 : 0,
      transform: visible
        ? "translateY(0px) scale(1)"
        : "translateY(40px) scale(0.9)",
    },
    config: { tension: 180, friction: 20 },
  });

  useEffect(() => {
    if (visible && !randomizing) {
      setRandomizing(true);

      let startTime = Date.now();
      const randomizeDuration = 1000;

      const generateRandom = () => {
        const randomFactor =
          value > 1000 ? 2000 : value > 100 ? 200 : value > 10 ? 20 : 10;
        return Math.floor(Math.random() * randomFactor);
      };

      const updateRandomValue = () => {
        const elapsed = Date.now() - startTime;

        if (elapsed < randomizeDuration) {
          setDisplayValue(generateRandom());
          animationRef.current = requestAnimationFrame(updateRandomValue);
        } else {
          setRandomizing(false);
        }
      };

      animationRef.current = requestAnimationFrame(updateRandomValue);

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, [visible, value]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <animated.div
      ref={counterRef}
      style={bounceAnimation}
      className="flex flex-col items-center text-center"
    >
      <animated.div className="text-4xl font-extrabold text-black mb-1 tracking-wide">
        {randomizing
          ? `${prefix}${displayValue}${suffix}`
          : number.to(
              (n) =>
                `${prefix}${value < 10 ? n.toFixed(1) : Math.floor(n)}${suffix}`
            )}
      </animated.div>
      <div className="text-sm text-gray-600">{label}</div>
    </animated.div>
  );
};

const Whoweare = () => {
  const headers = [
    "Know Who We Are?",
    "An Ultimate Fabric Brand",
    "Market Since 1992",
  ];

  return (
    <div className="bg-white py-16 px-6 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          {/* Header */}
          <div className="mb-12">
            <p className="text-sm text-gray-500 mb-2 uppercase tracking-widest">
              {headers[0]}
            </p>
            <p className="text-4xl font-extrabold text-black mb-2">
              <span className="text-neutral-800  decoration-wavy">
                {headers[1]}
              </span>
            </p>
            <p className="text-xl text-gray-700 mb-4">{headers[2]}</p>
            <div className="w-14 h-1 bg-black mb-6"></div>
            <p className="text-gray-700 mb-8 text-base leading-relaxed">
              For 33 years, ASHA SULZ FAB LLP has built a reputation for
              understanding the unique challenges our customers face and having
              a keen appreciation for the ever-evolving nature of their
              business. We're committed to helping customers succeed. It's what
              drives us to continually develop innovative Fabrics that deliver
              exceptional value.
            </p>
          </div>

          {/* Counters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <AnimatedCounter
              value={1.5}
              suffix=" M"
              label="Ready Stock"
              duration={500}
            />
            <AnimatedCounter
              value={1600}
              suffix="+"
              label="Design"
              duration={500}
            />
            <AnimatedCounter
              value={100}
              suffix="%"
              label="Client Satisfaction"
              duration={500}
            />
          </div>

          {/* Button */}
          <div>
            <button className="bg-black hover:bg-indigo-800 text-white px-6 py-3 rounded-md font-semibold shadow-lg transition-all duration-300 relative overflow-hidden group">
              <span className="relative z-10">Know More</span>
              <span className="absolute inset-0 border border-white opacity-30 rounded-md"></span>
            </button>
          </div>
        </div>

        {/* Right Content - Image Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-2 h-44 rounded-xl overflow-hidden shadow-md transform hover:scale-105 transition">
            <img
              src="https://images.unsplash.com/photo-1660733101148-21a9c1ad85d6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Fabric 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-52 rounded-xl overflow-hidden shadow-md transform hover:scale-105 transition">
            <img
              src="https://images.unsplash.com/photo-1625471592808-3b848a6e9ffd?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Fabric 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-52 rounded-xl overflow-hidden shadow-md transform hover:scale-105 transition">
            <img
              src="https://images.unsplash.com/photo-1630312752393-6f20bfa6e04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Fabric 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-44 rounded-xl overflow-hidden shadow-md transform hover:scale-105 transition">
            <img
              src="https://images.unsplash.com/photo-1630312752393-6f20bfa6e04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Fabric 4"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-44 rounded-xl overflow-hidden shadow-md transform hover:scale-105 transition">
            <img
              src="https://images.unsplash.com/photo-1660733101148-21a9c1ad85d6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Fabric 5"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whoweare;
