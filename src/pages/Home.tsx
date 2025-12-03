import Card from '../components/card/Card'
import style from "./home.module.css"
import useCountries from '../hooks/useCountries'
import FullWidth from '../containers/fullWidth/FullWidth'
import FilterName from '../components/filterName/FilterName'
import FilterRegion from '../components/filterRegion/FilterRegion'
import { useGetAllCountriesQuery } from '../services/countries'

const Home = () => {
  const {countries, filterByName, filterByRegion} = useCountries();

  return (
    <>
      <FullWidth>
        <FilterName filterByName={filterByName} />
        <FilterRegion filterByRegion={filterByRegion}/>
      </FullWidth>
      <div className={style.container}>
        {countries?.map(country => <Card key={country.name.common} {...country} />)}
      </div>
    </>
  )
}

export default Home