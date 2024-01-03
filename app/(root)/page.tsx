"use client";
import LandingPage from "@/components/LandingPage";
import Quiz from "@/components/quiz/Quiz";

const Home = async () => {
  return (
    <div className="">
      <LandingPage />
      <Quiz />
    </div>
  );
};

export default Home;
