import "./App.css";
import api from "../../api/api";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import Main from "../Main/Main";
import Photo from "../Photo/Photo";


function App() {
  const [searchQuery, setSearchQuery] = useState("Moscow");
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchQuery !== "") {
      setIsLoading(true);
      api
        .search(searchQuery)
        .then((response) => {
          const cards = response.results.map((item) => {
            return {
              id: item.id,
              src: item.urls.regular,
              title: item.description,
              subtitle: item.user.name,
            };
          });

          setCards(cards);
        })
        .finally(() => setIsLoading(false));
    }
  }, [searchQuery]);

  const handleFormSubmit = (value) => {
    setSearchQuery(value);
  };

  const getPhotoById = (id) => {
    const photo = cards.find((photo) => photo.id === id);
    if (photo) {
      return Promise.resolve(photo);
    }

    return api.getPhoto(id).then((item) => ({
      id: item.id,
      src: item.urls.regular,
      alt: item.alt_description,
      title: item.description,
      subtitle: item.user.name,
    }));
  }

  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Main
            handleFormSubmit={handleFormSubmit}
            isLoading={isLoading}
            cards={cards}
          />
        </Route>
        <Route path="/photo/:id">
          <Photo
            getPhoto={getPhotoById}
          />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
