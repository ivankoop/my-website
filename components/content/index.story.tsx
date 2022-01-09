import React from 'react';

import Content from './content';
import { experiences } from '../../mocks';

export default {
  title: 'Components/Content',
};

export const content = () => <Content experiences={experiences} />;
