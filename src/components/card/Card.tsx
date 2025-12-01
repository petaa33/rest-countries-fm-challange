import style from "./card.module.css";
import { ICountry } from "../../hooks/useCountries";

const Card: React.FC<ICountry> = ({
  capital,
  flagUrl,
  name,
  population,
  region,
}) => {
  return (
    <div className={style.container}>
      <img src={flagUrl} />
      <div className={style["text-container"]}>
        <div className={style["card-name"]}>{name}</div>
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
  );
};

export default Card;
