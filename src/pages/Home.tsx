import Card from '../components/card/Card'
import style from "./home.module.css"
import useCountries from '../hooks/useCountries'

const Home = () => {
  const countries = useCountries();
  
  return (
    <div className={style.container}>
      {countries.map(country => <Card key={country.name} {...country} />)}
    </div>
  )
}

export default Home