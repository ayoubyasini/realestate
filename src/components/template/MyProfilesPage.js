import DashboardCard from "../module/DashboardCard";
import styles from "./MyProfilesPage.module.css";

function MyProfilesPage({profiles}) {
  return (
    <div>
        {
            profiles.length ? null : (<p className={styles.text}>هیچ آگهی ضبت نشده است</p>)
        }
        {
            profiles.map(i => (
                <DashboardCard key={i._id} data={JSON.parse(JSON.stringify(i))}/>
            ))
        }
    </div>
  )
}

export default MyProfilesPage