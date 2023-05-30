import HeroesList from '../heroesList/HeroesList';
import HeroesAddForm from '../heroesAddForm/HeroesAddForm';
import HeroesFilters from '../heroesFilters/HeroesFilters';

import './app.scss';
import {useSelector} from "react-redux";

const App = () => {
  const { activeFilter, heroes, filteredHeroes } = useSelector((state) => state);
  console.log('ActiveFilter: ', activeFilter);
  console.log('Heroes: ', heroes);
  console.log('filteredHeroes: ', filteredHeroes);

    return (
        <main className="app">
            <div className="content">
                <HeroesList/>
                <div className="content__interactive">
                    <HeroesAddForm/>
                    <HeroesFilters/>
                </div>
            </div>
        </main>
    )
}

export default App;
