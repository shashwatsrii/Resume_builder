import React from 'react'
import styles from "./Header.module.css"
import Resume from "../assets/resume.svg"


function header() {
  return (
    <>
        <div className={styles.container}>
            <div className={styles.left}>
            <p className={styles.heading}>
                A <span>Resume</span> that stands out!
            </p>
            <p className={styles.heading}>
                Make your own resume. <span>It's free</span>
            </p>
            </div>
        <div className={styles.right}>
            <img id='ResumeLogo' src={Resume}/>
        </div>
        </div>
    
    </>
  )
}

export default header