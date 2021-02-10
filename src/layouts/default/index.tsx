import React, { ReactChildren } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './index.less'

export default (props: { children: ReactChildren }) => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        {props.children}
      </div>
      <Footer />
    </>
  );
};
