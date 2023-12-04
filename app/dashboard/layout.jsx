import Navbar from "../ui/dashboard/navbar/Navbar"
import Sidebar from "../ui/dashboard/sidebar/Sidebar"
import Footer from "../ui/dashboard/footer/Footer"
import styles from './dashboard.module.css'
const DashboardLayout = ({ children }) => {

    return (
        <div className={styles.dashboard}>
            <div className={styles.sidebar}><Sidebar /></div>
            <div className={styles.content}>
                <Navbar />
                {children}
                <Footer />
            </div>
        </div>
    )
}
export default DashboardLayout