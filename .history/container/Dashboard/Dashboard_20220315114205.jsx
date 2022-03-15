import BgImage from "../../components/Dashboard/BgImage/BgImage"
import Templates from "../../components/Dashboard/BgImage/Templates"
import styles from "./Dashboard.module.css"
function Dashboard() {
  return (
    <div className={styles.Dashboard}>
      <BgImage />
      <Templates />
    </div>
  )


}

export default Dashboard;