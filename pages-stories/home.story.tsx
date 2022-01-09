import React from 'react';

import Home from '../pages/index';
import { experiences } from '../mocks';

export default {
  title: 'Pages/Home',
};

export const home = () => <Home experiences={experiences} />;
