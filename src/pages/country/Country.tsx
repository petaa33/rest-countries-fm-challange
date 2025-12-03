import React, { use } from "react";
import style from "./country.module.css";
import { Link } from "react-router";
import useCountries from "../../hooks/useCountries";
import { useParams } from "react-router";
import { ICountryCurrency, ICountryLanguages } from "../../types";

const Country = () => {
  const { getCountryByCode } = useCountries();
  const { code } = useParams();

  const country = getCountryByCode(code!);

  function renderObjByKey<T extends ICountryLanguages | ICountryCurrency | undefined>(
    obj: T,
  ): React.ReactNode | null {
	if(!obj) {
		return;
	}
    return Object.keys(obj).map((key) => {
      const value = obj[key];
      return (
        <div key={key}>
          {typeof value === "string"
            ? value
            : `${value.name} - (${value.symbol})`}
        </div>
      );
    });
  }

  return (
    <div className={style.container}>
      <Link to={"/"} className={style.linkBtn}>
        <span>ic</span>
        <span>Back</span>
      </Link>
      <div className={style.country}>
        <div className={style.content}>
          <img src={country?.flagUrl} className={style.content} />
        </div>
        <div className={style.content}>
          <h1>{country?.name.common}</h1>
          <div className={style.details}>
            <div className={style.col}>
              <div>
                <h3 className={style.label}>Offical name:</h3> {country?.name.official}
              </div>
              <div>
                <h3 className={style.label}>Population:</h3> {country?.population}
              </div>
              <div>
                <h3 className={style.label}>Region:</h3> {country?.region}
              </div>
              <div>
                <h3 className={style.label}>Capital:</h3> {country?.capital}
              </div>
            </div>
            <div className={style.col}>
              <div>
                <h3 className={style.label}>Top Level domain:</h3> {country?.tld}
              </div>
			  <div>
				<h3 className={style.label}>Languages</h3> {renderObjByKey<ICountryLanguages | undefined>(country?.languages)}
			  </div>
			  <div>
				<h3 className={style.label}>Currencies</h3> {renderObjByKey<ICountryCurrency | undefined>(country?.currencies)}
			  </div>
            </div>
          </div>
          <div className={style.bordersContainer}>
            <h3>Border Countries:</h3>
			<div className={style.borders}>
				{country?.borders.map((border) => (<div className={style.border}>{border}</div>))}
			</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
