import Weather from "./Weather";

const Details = ({ country, clicked }) => {
  if (clicked) {
    return (
      <div className="details">
        <div>
          <p>
            <span>Official name : </span>
            {country.name.official}{" "}
          </p>
        </div>
        <center>
          <div>
            <img src={country.flags.png} alt="flag"></img>
          </div>
        </center>
        <p>
          <span>Capital : </span>
          {country.capital[0]}{" "}
        </p>
        <p>
          <span>Region : </span>
          {country.region}
        </p>
        <h4>Currencies : </h4>
        <ul>
          {Object.keys(country.currencies).map((k, i) => (
            <li key={i}>
              {country.currencies[k].name} ({country.currencies[k].symbol})
            </li>
          ))}
        </ul>
        <h4>Languages :</h4>
        <ul>
          {Object.keys(country.languages).map((k, i) => (
            <li key={i}>{country.languages[k]}</li>
          ))}
        </ul>
        <h4>Weather : </h4>
        <Weather city={country.capital[0]}></Weather>
      </div>
    );
  }
};

export default Details;
