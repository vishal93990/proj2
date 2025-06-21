import React, { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../API/PostApi";
import Loader from "../Components/UI/Loader";
import CountryCard from "../Components/UI/CountryCard";
import SearchFilter from "../Components/UI/SearchFilter";
const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("All");
  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  if (isPending) {
    return <Loader />;
  }
  const serachCountry=(country)=>{
      if (search) {
        return country.name.common.toLowerCase().includes(search.toLowerCase());

      }
      else{
        return country;
      }
  }

  const filterRegion=(country)=>{
      if (filter==='All') {
        return country;
      }
      else{
        return country.region ===filter
      }
  }


  const filterCountries =countries.filter((country)=> serachCountry(country)&&filterRegion(country));

  return (
    <section className="pl-30 pr-30 ">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />
      <ul className="grid grid-cols-4 gap-9 mt-16 card_container">
        {filterCountries.map((country, index) => {
          return <CountryCard country={country} key={index} />;
        })}
      </ul>
    </section>
  );
};

export default Country;
