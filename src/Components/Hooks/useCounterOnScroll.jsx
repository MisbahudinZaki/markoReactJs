import { useEffect } from "react";

const useCounterOnScroll = () => {
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");

    const updateCount = (el) => {
      const target = parseInt(el.getAttribute("data-target"), 10);
      let count = parseInt(el.textContent.replace("+", ""), 10) || 0;

      const duration = 2000;
      const steps = 60;
      const increment = Math.max(1, Math.ceil(target / steps));
      const delay = Math.floor(duration / (target / increment));

      const animate = () => {
        count += increment;
        if (count < target) {
          el.textContent = `${count}`;
          setTimeout(animate, delay);
        } else {
          el.textContent = `${target}`;
        }
      };

      animate();
    };

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateCount(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    counters.forEach((counter) => {
      observer.observe(counter);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
};

export default useCounterOnScroll;
