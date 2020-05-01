# Restaurant-Generator
Restaurant-Generator


### Overview

**Restaurant-Generator** is an application that helps users choose which restaurants to eat at. Users select choices ranging from food category, price, and location, Using the Yelp API, the application returns suggestions on where to eat, seamlessly making the decision for the user. The questions will be asked one by one in a ‘conversational design’ where users select from a range of options to answer the age old question ‘Where do you want to eat?’.

<br>

### Wireframes

https://whimsical.com/VoKA1AJcgPosHpFQUtAV5E

<br>


### MVP

- Generate a restaurant based on dining categories, geographic region, price, and location
- Yelp API
- Take questionnaire answers and place into url string for api query search 
- Mobile-first, conversational design using Flexbox
- Responsive design
- Generate and display dining results
- Get user location
- Storybook


<br>

### Post-MVP

- Add categories to questionairre -> Pickiness, Health, Gluten free vegan, vegetarian, etc.
- Choose for me button vs Multiple results
- Skip question option
- Select multiple options
- Gif icons as part of questions


<br>

#### Libraries



|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   | Route my React components |


<br>

#### Data



|    API     | Quality Docs? | Website       | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| Yelp API |      yes      | https://www.yelp.com/developers/documentation/v3/get_started | https://api.yelp.com/v3/businesses/search?=&term=restaurants&location=10710|

<br>

#### Component Hierarchy



```
src
|__ components/
      |__ App.js
      |__ Header.js
      |__ Question1.js
        |__ QuestionText.js
      |__ Question2.js
        |__ QuestionText.js
      |__ Question3.js
        |__ QuestionText.js
      |__ Choice.js
      |__ Results.js
      |__ Footer.js
        |__ Text.js
```

<br>

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    APP.js    | class |   n   |   n   | will be the parent component and hold all information._               |
|  Header | class |   n   |   n   | the header will contain the app name.      |
|   Question1   |   class   |   y  |   y   | A question about which food category to eat.    | 
|   Question2   |   class   |   y  |   y   | A question about which food price to eat.    |               |
|   Question3   |   class   |   y  |   y   | A question about getting user location.    |               |
|   QuestionText  |   functional   |   n  |   y   | Resusable question text.    |               |
|   Choice   | class |   y   |   y   | There will be a range choices within each question that will change depending on what the question is. |
|    Results    | class |   y   |   y   | Results will display restaurant info such as name, image, price range, review average, and location. |
|    Footer  | functional |   n   |   n   | Luke Sweeney 2020 - Yelp API |
|   Text   |   functional   |   n  |   y   | Resuable text in footer.    |               |


<br>


#### Component Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| App Component  |    H    |     1 hr      |     1hr     |   1hr   |
| API |    H     |     2 hrs      |     3hrs     |     3hrs     |
|  Basic JSX |    L     |     1 hr     |     1hr     |     1hr    |
|  Header |    H     |     1 hr     |      1hr    |     1hr    |
| Design survey/categories |    H     |     3 hrs      |    5hrs      |     5hrs     |
| Function to match survey results to API query |    H     |     4 hrs      |     5hrs     |    5hrs      |
| Create state for survey questions and choices |    H     |     4 hrs      |     5hrs     |   5hrs       |
| Create dynamic choices depending on the previous question |    H     |     3 hrs      |    4hrs      |     4hrs     |
| Choice Component |    H     |     1 hr      |     3hrs     |    3hrs      |
| Change state for survey questions |    H     |     3 hrs      |    6hrs      |    6hrs      |
| Results Component |    H     |     2 hrs      |     2hrs     |     2hrs     |
| Get user location |    M     |     2 hrs      |     2hrs     |     2hrs     |
| Basic CSS |    M     |     3 hrs      |     3hrs     |    3hrs     |
| Flexbox |    H     |     4 hrs      |      3hrs    |   3hrs      |
| Stroybook |    M     |     3 hrs      |      5hrs    |     5hrs     |
| TOTAL               |          |     37hrs     |    46hrs     |     46hrs     |

<br>


## Project Delivery

https://goofy-swartz-4e64b6.netlify.app/

<br><br><br>

### Code Showcase
       
```
       <main>

          <Switch>
            <Route exact path="/">
              <Question1 onClick={this.handleClick1} categories={this.state.categories}
              />
            </Route>

            <Route path="/2">
              <Question2 onClick={this.handleClick2} prices={this.state.prices} />
            </Route>


            <Route path="/3">
              <Question3 onClick={this.getUserLocation} />
            </Route>

            <Route path="/results">
              <Results
                results={this.state.choice}
              />
            </Route>

          </Switch>

        </main>
        
```


### Code Issues & Resolutions
I had a difficult time setting state and making a question flow with resuable question components so I made seperate Question1, Question2, and Question3 components. This allowed me to change the value of the chocie buttons for each question, allow those buttons to set a specific state depending on their value, and then bind specific onClick event listeners that allow for the transition from the previous question to the next.

<br><br>
