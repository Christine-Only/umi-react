import { Redirect } from 'umi'
import React, { ReactChildren } from 'react'

export default (props: { children: ReactChildren}) => {
  const isLogin = true
  if (isLogin) {
    return <div>{props.children}</div>
  } else {
    return <Redirect to='/login'/>
  }
}
