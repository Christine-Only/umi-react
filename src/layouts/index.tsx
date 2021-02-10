import React, { ReactChildren } from 'react';
import DefaultLayout from './default'

export default (props: { children: ReactChildren}) => {
  return (
    <>
      <DefaultLayout>{props.children}</DefaultLayout>
    </>
  );
}
