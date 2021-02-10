import React from 'react'
import styles from './index.less'
export default (props: { route: {} }) => {
  console.log('props.route', props.route) // 配置路由信息
  return <h1 className={styles.title}>哈哈哈</h1>
}
