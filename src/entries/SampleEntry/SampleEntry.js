import React from "react"

import BaseEntry from "../../components/BaseEntry/BaseEntry"
import googleLogo from "./google.jpeg"
import styles from "./SampleEntry.module.css"

const SampleEntry = () => {
  return (
    <BaseEntry className={styles.page}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h1>
            <img src={googleLogo} alt="Google" />
          </h1>
        </header>
        <main className={styles.content}>
          <form className={styles.form}>
            <p className={styles.paragraph}>Search the web using Google!</p>
            <input className={styles.searchInput} type="text" />
            <div>
              <select>
                <option>10 results</option>
                <option>30 results</option>
                <option>100 results</option>
              </select>
              <button>Google Search</button>
              <button>I&apos;m feeling lucky</button>
            </div>
            <aside className={styles.searchFormAside}>
              Index contains ~25 million pages (soon to be much bigger)
            </aside>
          </form>
        </main>
        <footer className={styles.footer}>
          <a className={styles.aboutGoogleHeading} href="#">
            About Google!
          </a>
          <ul className={styles.searchEngineList}>
            <li className={styles.searchEngineListItem}>
              <a href="#">Stanford Search</a>
            </li>{" "}
            <li className={styles.searchEngineListItem}>
              <a href="#">Linux Search</a>
            </li>
          </ul>
          <form className={styles.form}>
            <p className={styles.paragraph}>Get Google! updates monthly!</p>
            <input type="text" value="your e-mail" />
            <input type="submit" value="Subscribe" />
            <a className={styles.newsletterArchiveLink} href="">
              Archive
            </a>
          </form>
          <small>Copyright ©1997-8 Stanford University</small>
        </footer>
      </div>
    </BaseEntry>
  )
}

export default SampleEntry
