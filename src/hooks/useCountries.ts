import { useCallback, useState, useEffect } from "react";

export interface ICountry {
    flagUrl: string,
    name: string,
    capital: string,
    region: string,
    population: number,
    code: string
}

const API_URL = "https://restcountries.com/v3.1/all?fields=name,capital,region,independent,population,flags,cca3"

const fetchCountries = async() => {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();

        return data;
    } catch (error) {
        console.log("error");
        return []
    }
}

const useCountries = () => {
    const [allCountries, setAllCountries] = useState<Array<ICountry>>([]);
    // Filtered countries
    const [countries, setCountries] = useState<Array<ICountry>>(allCountries);

    useEffect(() => {
        fetchCountries().then(res => {
            const cleanRes: Array<ICountry> = res.map((c: any) => {
                const country: ICountry = {
                    name: c.name.common,
                    capital: c.capital[0],
                    flagUrl: c.flags.svg,
                    population: c.population,
                    region: c.region,
                    code: c.cca3
                }

                return country;
            })

            setAllCountries(cleanRes);
            setCountries(cleanRes);
        });
    }, []);
 
    const filterByName = (name: string) => {
        setCountries(allCountries.filter((country) => {
            return country.name.toLowerCase().includes(name.toLocaleLowerCase());
        }));
    }

    const filterByRegion = (region: string): void => {
        setCountries(allCountries.filter(country => country.region === region));
    }

    return {
        countries,
        filterByName,
        filterByRegion
    };
}

export default useCountries;