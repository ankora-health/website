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



const useHash = (containerId?: string): HashProps => {
  const router = useRouter();
  const [hash, setHash] = useState<string>("");

  useEffect(() => {
    const hashValue = window.location.hash;
    if (hashValue) {
      scroller.scrollTo(hashValue.substring(1), {
        duration: 500,
        smooth: true,
        containerId
      })
      setHash(hashValue);
    }
  }, [containerId]);

  const handleScroll = (href: string) => {
    router.push(href, { scroll: false } )
    scroller.scrollTo(href.substring(1), {
      duration: 500,
      smooth: true,
      containerId
    })
    setHash(href)
  }

  return { hash, setHash, handleScroll };
};

export default useHash;
