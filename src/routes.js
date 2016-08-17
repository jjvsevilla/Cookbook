import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line
import RecipesPage from './components/recipes/RecipesPage';

export default (
  <Route path="/" component={App}> // always load the App component and then nest these other items, pass them as children based on the routing
    <IndexRoute component={HomePage} /> //default page
    <Route path="about" component={AboutPage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="recipes" component={RecipesPage} />
  </Route>
);