import React from 'react';

import SideBar from './sidebar';

export default {
  title: 'Components/Sidebar',
};

export const sidebar = () => (
  <div style={{ maxWidth: '450px' }}>
    <SideBar />
  </div>
);
