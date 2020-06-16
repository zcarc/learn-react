import React from "react";
import styles from "./CSSModule.module.css";

const CSSModule = () => {
  console.log("styles: ", styles);
  return (
    //   className ={[styles.wrapper, styles.inverted].join(' ')}
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      안녕하세요, 저는 <span className="something">CSS Module</span>
    </div>
  );
};

export default CSSModule;
