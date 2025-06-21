import { useEffect, useState, useTransition } from "react";
import Loader from "./Loader";
import { NavLink, useParams } from "react-router-dom";
import {getCountryDetail} from "../../API/PostApi";
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
const CountryDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryDetail(params.id);
    
        setCountry(res.data[0]);

      console.log(res.data[0]);
      
    });
  }, []);

  if (isPending) {
    return <Loader />;
  }
  return <section className="pl-30 pr-30 h-full">
    <div className="h-full w-full flex items-center justify-center flex-col gap-20">

      {
        country &&
      
      <div className="flex items-center justify-center gap-9 p-16 ">
       <div>
         <img width='400px' src={country.flags.svg} alt={country.flags.alt}/>
       </div>

        <div>
           <p className="text-3xl font-bold">{country.name.official}</p>
           <div className="flex items-start flex-col justify-center gap-5">
            <p><span className="text-gray-400">Native Names:</span>
            {Object.keys(country.name.nativeName).map((index)=>
              country.name.nativeName[index].common
            ).join(", ")}</p>
            <p>
              <span className="text-gray-400">Population:</span>
              {country.population.toLocaleString()}
            </p>
            <p>
              <span className="text-gray-400">Region:</span>
              {
                country.region
              }
            </p>
            <p><span className="text-gray-400">Sub Region:</span>
            {
              country.subregion
            }
            </p>
            <p>
              <span className="text-gray-400">Capital:</span>
              {country.capital}
            </p>
           </div>
        </div>
      </div>
}

<NavLink to='/country'>

    <button className="p-1 text-gray-100 border pl-3 pr-3 text-sm  mb-10 rounded-2xl flex items-center justify-center gap-3">
      <FaLongArrowAltLeft />
Go Back
    </button>
</NavLink>
    </div>
  </section>
};

export default CountryDetails;
