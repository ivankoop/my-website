import React from 'react';

import Home from './index';
import { experiences } from '../mocks';

export default {
  title: 'Pages/Home',
};

export const home = () => <Home experiences={experiences} />;
