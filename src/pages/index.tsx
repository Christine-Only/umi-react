import styles from './index.less';
import { history, Link } from 'umi'


function IndexPage() {
  const handleClick = () => {
    history.push('/work?name=tangshiya')
  }

  return (
    <div>
      <h1 className={styles.title} onClick={handleClick}>Page index</h1>
      <div>
        {/* Link 只用于单页面应用内部跳转，如果是外部地址跳转请使用a标签 */}
        <Link to="/work">Work Page</Link>
        <br/>
        <a href="https://www.baidu.com">点我，跳转到百度</a>
      </div>
    </div>
  );
}

IndexPage.wrappers = ['@/wrappers/auth'];

// 扩展路由属性
// 支持在代码层通过导出静态属性的方式扩展路由

// IndexPage.title = 'Index Page'

export default IndexPage
