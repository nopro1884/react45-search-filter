import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "./components/SearchForm";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [names, setNames] = useState([]);
  // const { error, setError } = useState(null);

  useEffect(() => {
    async function fetchData() {
      const names = [];
      try {
        // for (let page = 1; page < 10; page++) {
        //   const { data } = await axios.get(
        //     `https://swapi.dev/api/people/?page=${page}`
        //   );
        //   names.push(...data.results.map((x) => x.name));
        // }
        setNames(static_names);
        setIsLoading(false);
      } catch (error) {
        console.log(Object.keys(error), error.message);
      }
    }

    fetchData();
  }, []);

  const onChangeHandler = (event) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  const createSearchResult = () => {
    let result;
    if (searchValue.length > 1) {
      result = names.filter(name => name.toLowerCase().includes(searchValue.toLowerCase()))
    }
    else {
      result = [...names]
    }

    return (
      <ul>
        {
          result.map((name, index) => {
            return <li key={index}>{name}</li>
          })
        }
      </ul>
    );
  };

  return (
    <div className="App">
      <SearchForm value={searchValue} onChange={onChangeHandler} />
      {isLoading ? <p>Loading...</p> : createSearchResult()}
    </div>
  );
}

export default App;

const static_names = [
  "Luke Skywalker",
  "C-3PO",
  "R2-D2",
  "Darth Vader",
  "Leia Organa",
  "Owen Lars",
  "Beru Whitesun lars",
  "R5-D4",
  "Biggs Darklighter",
  "Obi-Wan Kenobi",
  "Anakin Skywalker",
  "Wilhuff Tarkin",
  "Chewbacca",
  "Han Solo",
  "Greedo",
  "Jabba Desilijic Tiure",
  "Wedge Antilles",
  "Jek Tono Porkins",
  "Yoda",
  "Palpatine",
  "Boba Fett",
  "IG-88",
  "Bossk",
  "Lando Calrissian",
  "Lobot",
  "Ackbar",
  "Mon Mothma",
  "Arvel Crynyd",
  "Wicket Systri Warrick",
  "Nien Nunb",
  "Qui-Gon Jinn",
  "Nute Gunray",
  "Finis Valorum",
  "Padmé Amidala",
  "Jar Jar Binks",
  "Roos Tarpals",
  "Rugor Nass",
  "Ric Olié",
  "Watto",
  "Sebulba",
  "Quarsh Panaka",
  "Shmi Skywalker",
  "Darth Maul",
  "Bib Fortuna",
  "Ayla Secura",
  "Ratts Tyerel",
  "Dud Bolt",
  "Gasgano",
  "Ben Quadinaros",
  "Mace Windu",
  "Ki-Adi-Mundi",
  "Kit Fisto",
  "Eeth Koth",
  "Adi Gallia",
  "Saesee Tiin",
  "Yarael Poof",
  "Plo Koon",
  "Mas Amedda",
  "Gregar Typho",
  "Cordé",
  "Cliegg Lars",
  "Poggle the Lesser",
  "Luminara Unduli",
  "Barriss Offee",
  "Dormé",
  "Dooku",
  "Bail Prestor Organa",
  "Jango Fett",
  "Zam Wesell",
  "Dexter Jettster",
  "Lama Su",
  "Taun We",
  "Jocasta Nu",
  "R4-P17",
  "Wat Tambor",
  "San Hill",
  "Shaak Ti",
  "Grievous",
  "Tarfful",
  "Raymus Antilles",
  "Sly Moore",
  "Tion Medon",
];
