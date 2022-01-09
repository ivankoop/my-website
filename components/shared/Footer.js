import React from 'react';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footerRoot}>
      Created with ❤️ by <strong>Ivan Koop</strong>, Powered by{' '}
      <strong>NextJs</strong>
    </div>
  );
}
