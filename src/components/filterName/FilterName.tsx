import { useRef } from "react";
import style from "./filterName.module.css";
import searchIcon from "../../icons/search.svg";

interface IFilterName {
	filterByName: (name: string)=>void
}

const FilterName: React.FC<IFilterName> = ({filterByName}) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    textInputRef.current!.value = e.target.value;
	  filterByName(textInputRef.current!.value);
  };

  const focus = () => {
    textInputRef.current?.focus();
  };

  return (
    <div
      className={style.container}
      onClick={focus}
      
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
    >
      <img src={searchIcon} className={style.icon} alt="search-icon" />
      <input type="text" placeholder="Search for a country..." ref={textInputRef} />
    </div>
  );
};

export default FilterName;
