import React from 'react';

export function useWindowSize() {
  const [size, setSize] = React.useState({ width: window.innerWidth });
  React.useLayoutEffect(() => {
    function updateSize() {
      setSize({ width: window.innerWidth });
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}
