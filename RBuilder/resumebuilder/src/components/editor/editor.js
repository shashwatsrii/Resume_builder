import React from 'react'


import styles from "./editor.module.css"

function editor(props) {
    const sections = props.sections;
  return (
   <>
   <div className={styles.container}>
    <div className={styles.header}>
        {Object.keys(sections)?.map(key =>( <div className={styles.section}>{sections[key]}</div>))}
    </div>
   </div>
    
   </>
  )
}

export default editor