import React from "react";
import { useSearchParams } from "react-router-dom";

const SearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const age = searchParams.get("age");
  const city = searchParams.get("city");
  if (age === null) {
    setSearchParams({ age: 0, city: "satara" });
  }

  return (
    <div>
      SearchParams{"  " + age}
      {"  " + city}
    </div>
  );
};

export default SearchParams;
