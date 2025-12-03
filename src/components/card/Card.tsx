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
    <Link to={`/country/${code}`}>
      <div className={style.container}>
        <img src={flagUrl} />
        <div className={style["text-container"]}>
          <div className={style["card-name"]}>{name.common}</div>
          <div>
            <span>Population: </span>
            {population}
          </div>
          <div>
            <span>Region: </span>
            {region}
          </div>
          <div>
            <span>Capital: </span>
            {capital}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
