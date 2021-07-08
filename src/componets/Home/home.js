import React from 'react';

function Home(props){

  return(
    <div id="appHome" className="Home">
      <section id="first-row">
          <div class="welcome">
            <h3>Welcome to the Dragon's Kitchen</h3>
            <p>This is a tool for creatures of all walks to create and build fantastic feasts for them and theirs. there is a simple toutorial of our app below when your ready create an account and join the Dragons in the Kitchen.</p>
          </div>
        </section>

        <div class="searchbar">
            <form  class="search-full" action="/searchRecipies" method="POST">
              <feildset class="search-main">
                <label for="search-recipes"><h6>Hunt for:</h6></label>
                <input type="text" id="search-recipes" name="content" placeholder="lamb roast"/>
                <select name="type" id="search-select" placeholder="Select">
                  <option value="query">Recipe</option>
                  <option value="cuisine">Cuisine</option>
                  <option value="author">author</option>
                </select>
                <label for="search-select"><h6>Hunt Details:</h6></label>
                  <label for="vegetarian">Vegetarian</label>
                  <input type="checkbox" name="vegetarian" id="vegetarian" value="vegetarian"/>
                  <label for="vegan">Vegan</label>
                  <input type="checkbox" name="vegan" id="vegan" value="vegan"/>
                <label for="result-count">Return with:</label>
                <input type="number" id="result-count" name="count" min="1" max="25" value="1"/>
              </feildset>
              <button type="submit">search</button>
            </form>
            <form class="search-random" action="/randomRecipies" method="POST">
              <input type="hidden" value="random"/>
              <button type="submit">5 Random Recipies</button>
            </form>
          </div>

          <section id="recomends">
          <div>
            <h4> Feature Comming Soon</h4>
            <p>A TDK Reccomends recipes section with 10 random recipes from the TDK Database, in comming months will become 10, 3 and above rated recipies</p>
          </div>
          <div class="tdk-recomends">
            <p>this will be recomended based on rating in Dragon DB</p>
          </div>
        </section>

    </div>
  )
}

export default Home;




