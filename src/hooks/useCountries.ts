import { useCallback, useState, useEffect } from "react";

export interface ICountry {
    flagUrl: string,
    name: string,
    capital: string,
    region: string,
    population: number
}

const API_URL = "https://restcountries.com/v3.1/all?fields=name,capital,region,independent,population,flags"

const fetchCountries = async() => {
    console.log("Fetching countries..");
    
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
    const [countries, setCountries] = useState<Array<ICountry>>([]);

    useEffect(() => {
        fetchCountries().then(res => {
            const cleanRes: Array<ICountry> = res.map((c: any) => {
                const country: ICountry = {
                    name: c.name.common,
                    capital: c.capital[0],
                    flagUrl: c.flags.svg,
                    population: c.population,
                    region: c.region
                }

                return country;
            })

            setCountries(cleanRes);
        });
    }, []);

    return countries;
}

export default useCountries;