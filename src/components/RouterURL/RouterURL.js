import React from 'react';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import Project from '../Project/Project';
import Skill from '../Skill/Skill';
import LilyBOT from '../LilyBOT/LilyBOT';
import NotFound404 from '../NotFound404/NotFound404';

const routes = [
  {
      path: '/',
      exact: true,
      main: () => <Home/>
  },
  {
      path: '/profile',
      exact: true,
      main: () => <Profile/>
  },
  {
      path: '/skill',
      exact: true,
      main: () => <Skill/>
  },
  {
      path: '/project',
      exact: true,
      main: () => <Project/>
  },
  {
      path: '/lily-bot',
      exact: true,
      main: () => <LilyBOT/>
  },
  {
      path: '/',
      exact: false,
      main: () => <NotFound404/>
  }
];

export default routes;
