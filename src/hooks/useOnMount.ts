import { useEffect } from "react";

export function useOnMount(fn: () => any) {
  useEffect(() => {
    const result = fn();
    if (typeof result === "function") {
      return result;
    }
  }, []);
}
