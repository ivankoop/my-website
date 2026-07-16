import React, { useState } from 'react';
import { FileText, Mail, Check } from 'lucide-react';
import { Linkedin, Github, Youtube } from './brand-icons';
import styles from './headertitles.module.css';

const linkedinUrl = 'https://www.linkedin.com/in/ivankoop/';
const githubUrl = 'https://github.com/ivankoop';
const cvLink =
  'https://drive.google.com/file/d/1i4MogYnRB_j9B6n1DW_NBEhGz-rboQyE/view?usp=drive_link';
const youtubeUrl = 'https://www.youtube.com/@ivankoop1915';
const mediumUrl = 'https://medium.com/@ivankoop';
const email = 'ivan@tabrasa.io';

export default function HeaderTitles() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // Clipboard unavailable (older browser / insecure context): fall back
      // to opening the user's mail client.
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div className={styles.headerTitlesRoot}>
      <div className={styles.profileSection}>
        <img
          src="/images/profile-picture.jpg"
          alt="Ivan Koop"
          className={styles.profilePicture}
          width={80}
          height={80}
        />
        <div className={styles.titleSection}>
          <h1 className={styles.title}>Ivan Koop</h1>
          <h2 className={styles.subtitle}>SENIOR FULL STACK DEVELOPER</h2>
        </div>
      </div>

      <div className={styles.iconsRow}>
        <span
          className={`${styles.toast} ${copied ? styles.toastVisible : ''}`}
          role="status"
          aria-hidden={!copied}
        >
          Email copied
        </span>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconCont}
          aria-label="LinkedIn profile"
          title="LinkedIn"
        >
          <Linkedin size={16} />
        </a>
        <button
          type="button"
          onClick={copyEmail}
          className={styles.iconCont}
          aria-label={copied ? 'Email address copied' : 'Copy email address'}
          title={copied ? 'Copied!' : 'Copy email'}
        >
          {copied ? <Check size={16} /> : <Mail size={16} />}
        </button>
        <a
          href={cvLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconCont}
          aria-label="Résumé (PDF)"
          title="Résumé"
        >
          <FileText size={16} />
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconCont}
          aria-label="GitHub profile"
          title="GitHub"
        >
          <Github size={16} />
        </a>
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconCont}
          aria-label="YouTube channel"
          title="YouTube"
        >
          <Youtube size={16} />
        </a>
        <a
          href={mediumUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconCont}
          aria-label="Medium blog"
          title="Medium"
        >
          <div className={styles.mediumLogo} aria-label="Medium"></div>
        </a>
      </div>
    </div>
  );
}
