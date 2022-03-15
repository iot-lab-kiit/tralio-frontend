import BgImage from "../../components/Dashboard/BgImage"
import Templates from "../../components/Dashboard/Templates"
import styles from "./Dashboard.module.css"
function Dashboard() {
  return (
    <div className={styles}>
      <BgImage />
      <Templates />
    </div>
  )


}

export default Dashboard;