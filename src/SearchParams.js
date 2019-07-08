import React, { useState } from "react";

const SearchParams = () => {
  //Hooks never go inside of if statements or for loops */
  //Hooks always start with use. They also return the current state and a function to update that state
  const [location, setLocation] = useState("Seattle, WA");
  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={event => setLocation(event.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
