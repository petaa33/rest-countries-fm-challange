import React, { useState } from "react";
import style from "./filterRegion.module.css";
import ArrowIcon from "../../icons/ArrowIcon";

const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

interface IFilterRegion {
  filterByRegion: (region: string) => void;
}

const FilterRegion: React.FC<IFilterRegion> = ({ filterByRegion }) => {
  const [toggled, setToggled] = useState<boolean>(false);

  const onToggle = () => {
    setToggled(!toggled);
  };

  const onRegionSelect = (region: string) => {
    filterByRegion(region);
    setToggled(false);
  };

  return (
    <div className={style.container} onClick={onToggle}>
      <span>Filter by region</span>
      <ArrowIcon className={style.arrow}/>

      {toggled && (
        <div className={style.regions}>
          {regions.map((region) => (
            <div
              key={region}
              className={style.region}
              onClick={() => onRegionSelect(region)}
            >
              {region}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterRegion;
