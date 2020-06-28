import React, { useEffect } from 'react';
import styles from './layout.module.css';

export default function Layout({ children }) {
  useEffect(() => {

    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: 'AIzaSyAqqUP1LN1yAoHefxI3u59mNBQFyN0bhow',
      authDomain: 'ivan-koop-website.firebaseapp.com',
      databaseURL: 'https://ivan-koop-website.firebaseio.com',
      projectId: 'ivan-koop-website',
      storageBucket: 'ivan-koop-website.appspot.com',
      messagingSenderId: '224763315396',
      appId: '1:224763315396:web:b8c4648a08591736ffb591',
      measurementId: 'G-1TWM3Z218L',
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

  }, []);

  return <main className={styles.container}>{children}</main>;
}
