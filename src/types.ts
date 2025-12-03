interface ICountryName {
    common: string,
    official: string    
}

export interface ICountryCurrency {
    [key: string]: {
        name: string,
        symbol: string
    }
}

export interface ICountryLanguages {
    [key: string]: string
}


export interface ICountry {
    flagUrl: string,
    name: ICountryName,
    capital: string,
    region: string,
    population: number,
    code: string,
    borders: string[],
    tld: string[],
    currencies: ICountryCurrency,
    languages: ICountryLanguages
}