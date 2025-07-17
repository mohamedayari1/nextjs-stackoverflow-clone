"use client";

import { useEffect } from "react";

const AskQuestion = () => {
  useEffect(() => {
    console.log("this is only client-side");
  }, []);

  return <div>AskQuestion</div>;
};

export default AskQuestion;