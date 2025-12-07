import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICountry } from "../types";
const BASE_API = "https://restcountries.com/v3.1/";
const QUERY_PARAMS =
  "/all?fields=name,capital,region,population,flags,cca3,borders,currencies,languages,tld";

export const countriesApi = createApi({
  reducerPath: "countriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API }),
  endpoints: (builder) => ({
    getAllCountries: builder.query<ICountry[], void>({
      query: () => QUERY_PARAMS,
      transformResponse: (res: any): ICountry[] =>
        res
          .map((c: any) => {
            const country: ICountry = {
              name: c.name,
              capital: c.capital[0],
              flagUrl: c.flags.svg,
              population: c.population,
              region: c.region,
              code: c.cca3,
              borders: c.borders,
              tld: c.tld,
              currencies: c.currencies,
              languages: c.languages,
            };

            return country;
          })
          .sort((a: ICountry, b: ICountry) =>
            a.name.common > b.name.common
              ? 1
              : b.name.common > a.name.common
              ? -1
              : 0
          ),
    }),
  }),
});

export const { useGetAllCountriesQuery } = countriesApi;
