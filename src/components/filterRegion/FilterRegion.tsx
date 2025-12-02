import React, { useState } from "react";
import style from "./filterRegion.module.css";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

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
      <span>ic</span>

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
