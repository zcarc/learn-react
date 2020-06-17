import React from "react";
import classNames from 'classnames/bind'
import styles from "./CSSModule.module.css";

const cx = classNames.bind(styles);
console.log('cx: ', cx);
console.log("styles: ", styles);

const CSSModule = () => {
  return (
    //   className ={[styles.wrapper, styles.inverted].join(' ')}
    <div className={cx('wrapper', 'inverted')}>
      안녕하세요, 저는 <span className="something">CSS Module</span>
    </div>
  );
};

export default CSSModule;
