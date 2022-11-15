import {useState} from 'react';
import axios from 'axios';
import RecipeTile from './components/RecipeTile';
import './App.css';
import Add from './Add';

function App() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  let [healthLabel, setHealthLabel] = useState('vegan');
  console.log(healthLabel);
  console.log(recipes);

  const YOUR_APP_ID = '414d3867';
  const YOUR_APP_KEY = 'e625324c178af278a07d9d71c5b90e3a';
  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;
  console.log(url);
  
  const getRecipeInfo = async() => {
    var result = await axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data);

    // var res = await fetch(url);
    // var result = await res.json();
    // setRecipes(result.hits);
    // console.log(result.hits);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // This will prevent page from reloading.
    console.log(healthLabel);
    getRecipeInfo();
  }

  const add = () => {
    return 2 + 2;
    //console.log("Addition");
  }
  return (
    <div className='app'>
      <h1>
        <u>Food Recipe Hub</u>🥗
      </h1>
      <form className='app__searchForm' onSubmit={handleSubmit}>
        <input 
          type='text' 
          placeholder='Type the Ingredient' 
          autoComplete='Off' 
          className='app__input' 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} // Fat Arrow Function.
        />
        <select className='app__healthLabels' onChange={(e) => setHealthLabel(e.target.value)} value={healthLabel}>
          <option value='vegan' onClick={(e) => setHealthLabel('vegan')}>vegan</option> {/* onClick is not working here */}
          <option value='vegetarian' onClick={() => setHealthLabel('vegetarian')}>vegetarian</option>
          <option value='low-sugar' onClick={() => setHealthLabel('low-sugar')}>low-sugar</option>
          <option value='dairy-free' onClick={() => setHealthLabel('dairy-free')}>dairy-free</option>
          <option value='immuno-supportive' onClick={() => setHealthLabel('immuno-supportive')}>immuno-supportive</option>
          <option value='wheat-free' onClick={() => setHealthLabel('wheat-free')}>wheat-free</option>
        </select>
        <input type="submit" value='Get Recipe' className="app__submit" onClick={add} />
        {/* <input type="submit" value='Get Recipe' className="app__submit" onClick={add()} /> */}
      </form>
      <Add title='Addition' add={add()} />
      <div className='app__recipes'>
        {recipes.map((recipe, index) => {
          return <RecipeTile key={index} label={recipe.recipe.label} image={recipe.recipe.image} url={recipe.recipe.url} />
        })}
      </div>
    </div>
  );
}
export default App;
