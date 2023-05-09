"use client";

import { useStore } from "@/stores";

export default function ExampleDisplay() {
  const { userAgent } = useStore();

  const handleClickDisplay = () => {
    console.log(userAgent);
  };

  return (
    <>
      <button onClick={handleClickDisplay}>Example Display</button>
    </>
  );
}
