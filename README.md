# Restaurant-Generator
Restaurant-Generator


### Overview

_**Restaurant-Generator** is an application that helps users choose which restaurants to eat at. Users answer questions ranging from food category, price, location, ratings, and specialty requests. Using the Yelp API, the application returns suggestions on where to eat, seamlessly making the decision for the user. The questions will be asked one by one in a ‘conversational design’ where users select from 3-4 options to answer the age old question ‘Where do you want to eat?’._

<br>

### Wireframes

https://whimsical.com/VoKA1AJcgPosHpFQUtAV5E

<br>


### MVP

- Survey Questionnaire based on dining categories, geographic region, price, and location
- Yelp API
- Take questionnaire answers and place into url string for api query search 
- Mobile-first, conversational design
- Responsive design
- Generate and display dining results
- Get user location


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
      |__ Survey.js
      |__ Choice.js
      |__ Results.js
      |__ Footer.js
```

<br>

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    APP.js    | class |   n   |   n   | _will be the parent component and hold all information._               |
|  Header | functional |   n   |   n   | the header will contain the app name.      |
|   Survey   |   class   |   y  |   y   | A questionairre about which restaurant to eat at.    |               |
|   Choice   | class |   y   |   y   | There will be 3-4 choices within each questionairre that will change depending on what the question is. |
|    Results    | class |   y   |   y   | Results will display restaurant info such as name, image, price range, review average, and location. |
|    Footer  | functional |   n   |   n   | Luke Sweeney 2020 - Yelp API |

<br>


#### Component Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| App  |    H    |     3 hrs      |          |      |
| API |    H     |     4 hrs      |          |          |
|  Basic JSX |    H     |     1 hr     |          |         |
|  Header |    H     |     1 hr     |          |         |
| Survey |    H     |     10 hrs      |          |          |
| Choice |    H     |     10 hrs      |          |          |
| Results |    H     |     5 hrs      |          |          |
| Basic CSS |    H     |     8 hrs      |          |         |
| Flexbox |    L     |     5 hrs      |          |         |
| TOTAL               |          |           |         |          |

<br>


## Project Delivery

### Code Showcase


### Code Issues & Resolutions

