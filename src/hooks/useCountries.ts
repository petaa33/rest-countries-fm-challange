import { useState, useEffect } from "react";
import { useGetAllCountriesQuery } from "../services/countries";
import { ICountry } from "../types";

const useCountries = () => {
    const {data: allCountries} = useGetAllCountriesQuery();
    const [countries, setCountries] = useState<ICountry[] | undefined>(allCountries);

    useEffect(() => {
        setCountries(allCountries);
    }, [allCountries]);

    const filterByName = (name: string) => {
        setCountries(allCountries?.filter((country) => {
            return country.name.common.toLowerCase().includes(name.toLocaleLowerCase());
        }));
    }

    const filterByRegion = (region: string): void => {
        if(region === "All") {
            setCountries(allCountries);
            return;
        }
        
        setCountries(allCountries?.filter(country => country.region === region));
    }

    const getCountryByCode = (code: string): ICountry | undefined => {
        return allCountries?.find(c => c.code === code);
    }

    return {
        countries,
        filterByName,
        filterByRegion,
        getCountryByCode
    };
}

export default useCountries;