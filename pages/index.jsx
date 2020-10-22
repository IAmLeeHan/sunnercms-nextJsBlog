import Layout from '../components/Layout/index'
import styles from './index.module.scss'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <div className={styles.homePageContainer}>
        {/* 首页中间信息展示 */}
        <div className={styles.homeInfoContainer}>
          <div className={styles.title}>去&nbsp;哪&nbsp;儿</div>
          <div className={styles.subTitle}>剑气纵横三万里，一剑光寒十九洲</div>
          <div className={styles.enterButton}>Enter Blog</div>
        </div>
        {/* 首页右侧抽屉 */}
        <div className={styles.rightDrawer}>
          <div className={styles.drawerInfo}>
            <div className={styles.drawerImgContainer}>
              <img
                src="/images/profile.jpg"
                className={styles.headerImage}
              />
            </div>
            <div className={styles.drawerName}>孙赵祥</div>
            <div className={styles.nameDes}>zhaoxiang.sun</div>
            <div className={styles.desText}>为之则易 不为则难</div>
            <div className={styles.linkIconBar}>
              <i className="iconfont icon-github"></i>
              <i className="iconfont icon-csdn"></i>
              <i className="iconfont icon-xieboke"></i>
            </div>
            <div className={styles.concatInfo}>
              <div className={styles.concatInfoTopLine}>
                <i className="iconfont icon-weizhi1"><span>北京</span></i>
                <i className="iconfont icon-gongsimingcheng"><span>去哪儿</span></i>
              </div>
              <i className="iconfont icon-lianxifangshi"><span>18827377933</span></i>
              <i className="iconfont icon-icon-email"><span>sunnercms@163.com</span></i>
            </div>
          </div>
        </div>
        <div className={styles.drawerButton}>
          <div className={styles.closeIcon}>
            <i className="iconfont icon-wei-"></i>
          </div>
        </div>
      </div>
    </Layout>
  )
}

