import { useState, useEffect } from "react";
import Search from "./components/Search";
import Countries from "./components/Countries";
import countryService from "./services/countryService";
const Play = () => {
  const [searchInput, setSearchInput] = useState("");
  const [countries, setCountries] = useState(null);
  const [error, setError] = useState("");

  const handleInput = (e) => {
    const val = e.target.value.trim();
    setCountries(null);
    if (!val.match(/^\s*$/)) {
      countryService
        .getCountries(val)
        .then((r) => {
          setCountries(r.data);
          setError("");
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  };
  return (
    <div className="play">
      <Search handleInput={handleInput}></Search>
      <div className="countries">
        <Countries err={error} countries={countries}></Countries>
      </div>
    </div>
  );
};

export default Play;
