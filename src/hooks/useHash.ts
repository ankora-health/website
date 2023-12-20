"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { scroller } from "react-scroll";

interface HashProps {
  hash: string;
  setHash: Dispatch<SetStateAction<string>>;
  // eslint-disable-next-line no-unused-vars
  handleScroll: (value: string) => void
}

const useHash = (): HashProps => {
  const router = useRouter();
  const [hash, setHash] = useState<string>("");

  useEffect(() => {
    const hashValue = window.location.hash;
    if (hashValue) {
      scroller.scrollTo(hashValue.substring(1), {
        duration: 500,
        smooth: true,
        containerId: "containerElement",
      })
      setHash(hashValue);
    }
  }, []);

  const handleScroll = (href: string) => {
    router.push(href, { scroll: false } )
    setHash(href)
  }

  return { hash, setHash, handleScroll };
};

export default useHash;
