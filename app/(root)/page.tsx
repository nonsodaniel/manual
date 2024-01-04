"use client";
import Container from "@/components/Container";
import { DataContext } from "@/context/DataContext";
import React, { useState } from "react";

const page = () => {
  const [showQuiz, setShowQuiz] = useState<boolean>(false);
  return (
    <div>
      <DataContext.Provider
        value={{
          showQuiz,
          setShowQuiz,
        }}
      >
        <Container />
      </DataContext.Provider>
    </div>
  );
};

export default page;
