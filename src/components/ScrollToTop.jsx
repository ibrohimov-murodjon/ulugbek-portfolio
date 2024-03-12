import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [scrollUp, setScrollUp] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      if (scrollY > 10) setScrollUp(true);
      else setScrollUp(false);
    };
  }, []);

  function scroll() {
    scrollTo({
      top: 0,
    });
  }

  return (
    scrollUp && (
      <button
        className="fixed bottom-10 right-10 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-opacity hover:opacity-80"
        onClick={scroll}
      >
        <i className="fa-solid fa-arrow-up text-lg" />
      </button>
    )
  );
}
