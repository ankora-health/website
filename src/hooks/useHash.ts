"use client";
import { useEffect, useState, Dispatch, SetStateAction } from "react";

interface HashProps {
  hash: string;
  setHash: Dispatch<SetStateAction<string>>;
}

const useHash = (): HashProps => {
  const [hash, setHash] = useState<string>("");

  useEffect(() => {
    const hashValue = window.location.hash;
    if (hashValue) {
      document?.querySelector(hashValue)?.scrollIntoView({
        behavior: "smooth",
      });
      setHash(hashValue);
    }
  }, []);

  return { hash, setHash };
};

export default useHash;
