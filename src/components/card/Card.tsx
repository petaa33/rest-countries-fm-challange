import style from "./card.module.css";
import { Link } from "react-router";
import { ICountry } from "../../types";

const Card: React.FC<ICountry> = ({
  capital,
  flagUrl,
  name,
  population,
  region,
  code,
}) => {
  return (
    <Link to={`/country/${code}`} className={style.container}>
      <img src={flagUrl} />
      <div className={style["text-container"]}>
        <h2 className={style["card-name"]}>{name.common}</h2>
        <div className={style.detail}>
          <strong>Population: </strong>
          {population.toLocaleString()}
        </div>
        <div className={style.detail}>
          <strong>Region: </strong>
          {region}
        </div>
        <div className={style.detail}>
          <strong>Capital: </strong>
          {capital}
        </div>
      </div>
    </Link>
  );
};

export default Card;
