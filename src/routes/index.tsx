import React from 'react';
import { useRoutes } from 'react-router-dom';

import { publicRoutes } from './publicRoutes';

export const AppRoutes = () => {
  const routes = publicRoutes;

  const element = useRoutes([...routes]);

  return <>{element}</>;
};
