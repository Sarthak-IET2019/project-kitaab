import LoginForm from "@/pageComponents/Home/LoginForm";
import RegistrationForm from "@/pageComponents/Home/RegistrationForm";
import { useState } from "react";

export default function Home() {
  const [slideFormX, setSlideFormX] = useState(0);
  return (
    <div className="w-full flex flex-wrap">
      <div className="w-full bg-blue flex justify-center items-center">
        <div className="w-full max-w-[500px] min-h-[400px] overflow-hidden flex justify-start  gap-x-10 items-center">
          <div
            className="relative whitespace-nowrap h-max rounded-md min-w-full py-8 px-8 bg-white transition-all duration-500 max-h-max"
            style={{ transform: `translateX(${slideFormX})` }}
          >
            <LoginForm setSlideFormX={setSlideFormX} />
          </div>
          <div
            className="relative whitespace-nowrap min-w-full rounded-md py-8 px-8 bg-white  transition-all  duration-500"
            style={{ transform: `translateX(${slideFormX})` }}
          >
            <RegistrationForm setSlideFormX={setSlideFormX} />
          </div>
        </div>
      </div>
    </div>
  );
}
