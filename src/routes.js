import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import RecipesPage from './components/recipes/RecipesPage';

export default (
  <Route path="/" component={App}> // always load the App component and then nest these other items, pass them as children based on the routing
    <IndexRoute component={HomePage} /> //default page   
    <Route path="about" component={AboutPage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="recipes" component={RecipesPage} />
  </Route>
);