// Responsive utilities and performance helpers
import { useEffect, useState } from "react";

// Hook for responsive breakpoints
export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setBreakpoint("mobile");
      } else if (width < 768) {
        setBreakpoint("tablet-sm");
      } else if (width < 992) {
        setBreakpoint("tablet");
      } else if (width < 1200) {
        setBreakpoint("desktop-sm");
      } else {
        setBreakpoint("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
};

// Hook for intersection observer (lazy loading, animations)
export const useIntersectionObserver = (options = {}) => {
  const [ref, setRef] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
        ...options,
      },
    );

    observer.observe(ref);

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options]);

  return [setRef, isIntersecting];
};

// Debounce utility for performance
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Smooth scroll utility
export const scrollToElement = (elementId, offset = 100) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  }
};

// Image lazy loading component
export const LazyImage = ({ src, alt, className, ...props }) => {
  const [imageRef, isVisible] = useIntersectionObserver();
  const [loaded, setLoaded] = useState(false);

  return (
    <div ref={imageRef} className={`lazy-image-container ${className || ""}`}>
      {isVisible && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          className={`lazy-image ${loaded ? "loaded" : "loading"}`}
          {...props}
        />
      )}
    </div>
  );
};
