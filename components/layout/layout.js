import React, { useEffect } from 'react';
import styles from './layout.module.css';

export default function Layout({ children }) {
  return <main className={styles.container}>{children}</main>;
}
