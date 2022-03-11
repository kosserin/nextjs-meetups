import Header from "./Header/Header";
import styles from './Layout.module.css';

const Layout = (props) => {
  return (
    <div className={styles.layout}>
        <Header />
        {props.children}
    </div>
  )
}

export default Layout