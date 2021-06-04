import { ViewGridIcon } from "@heroicons/react/solid";
import TravelOptions from "./TravelOptions";

function AppRight() {
  return (
    <div className="p-10">
      <header className="flex justify-between">
        <ViewGridIcon className="h-8 w-8" />
        <div className="flex items-center">
          <p className="link">Gallery</p>
          <p className="link">Stories</p>
          <img
            className="h-10 w-10 rounded-2xl"
            src="https://res.cloudinary.com/dssvrf9oz/image/upload/v1622777589/ben-sweet-2LowviVHZ-E-unsplash_1_nud97c.jpg"
          />
        </div>
      </header>

      <h1 className="text-blue font-semibold text-4xl">Discover</h1>
      <div className="flex w-80 justify-between mt-10">
        <p className="text-orange text-xl border-b-[2px] border-orange">
          Popular
        </p>
        <p className="text-gray text-xl hover:text-orange cursor-pointer hover:border-b-[2px] border-orange delay-75 duration-100">
          Adventure
        </p>
        <p className="text-gray text-xl hover:text-orange cursor-pointer hover:border-b-[2px] border-orange delay-75 duration-100">
          Tour
        </p>
      </div>
      <div className="flex overflow-scroll hidescrollbar mt-5">
        <img
          className="w-60 h-80 mx-2 rounded-xl"
          src="https://images.unsplash.com/photo-1531101860752-fdad86cec994?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          alt="mountains"
        />
        <img
          className="w-60 h-80 mx-2 rounded-xl"
          src="https://images.unsplash.com/photo-1457459686225-c7db79d4e59f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=335&q=80"
          alt="mountains"
        />
        <img
          className="w-60 h-80 mx-2 rounded-xl"
          src="https://images.unsplash.com/photo-1575351881847-b3bf188d9d0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          alt="hot air balloons"
        />
      </div>
      <h1 className="text-blue font-bold text-4xl mt-5">Types of Travel</h1>
      <div className="flex justify-evenly mt-2">
        <TravelOptions emoji="⭐" title="Luxury" active />
        <TravelOptions emoji="🦁" title="Safari" />
        <TravelOptions emoji="🚄" title="Train" />
        <TravelOptions emoji="👪" title="Family" />
        <TravelOptions emoji="👨" title="Alone" />
      </div>
    </div>
  );
}

export default AppRight;
