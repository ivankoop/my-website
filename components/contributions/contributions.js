import React, { useState, useEffect } from 'react';
import styles from "./contributions.module.css";
import getBaseUrl from "../../utils/baseUrlUtils"
import ContributionsApi from "../../client/client"
import contributions from '../../pages/api/contributions';


export function Contributions() {

  const [constributions, setContributions] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    loadContributions()
  },[])

  const loadContributions = ( async () => {
    try {
      setLoading(true)
      const response = await ContributionsApi.getContributions(getBaseUrl())
      console.log("response", response)
      // setContributions(response?.data?.contributions)
      //console.log("este", response?.data?.contributions)
    } catch (e) {
      console.log("ERROR", e)
    } finally {
      setLoading(false)
    }
  })

  console.log("ACAAA", contributions)

  return <div className={styles.contributionsRoot}>Contributions</div>;
}



// Contributions.getInitialProps = async (ctx) => {
//     const res = await fetch("https://api.github.com/repos/vercel/next.js");
//     const json = await res.json();
//     console.log("acaa", json)
//     return { contributions: json.stargazers_count };
//   };

export default Contributions;


