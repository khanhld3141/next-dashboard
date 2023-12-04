import React from 'react'
import styles from './sidebar.module.css'
import Image from 'next/image'
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout
} from 'react-icons/md'
import MenuLink from '../components/menuSideBar/MenuLink'

const menuItems = [
  {
    title: "Pages",
    lists: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />
      }
    ]
  },
  {
    title: "Analytics",
    lists: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />
      },
    ]
  },
  {
    title: "Users",
    lists: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />
      },
      {
        title: "Logout",
        path: "/dashboard/teams",
        icon: <MdLogout />
      },
    ]
  }
]


const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.avatar}>
          <Image priority className={styles.img} width={50} height={50} src={" https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien-600x600.jpg"} alt="avatar" />
        </div>
        <div className={styles.detail}>
          <div className={styles.name}>user1</div>
          <div className={styles.role}>Administrator</div>
        </div>
      </div>
      <div className={styles.menu}>
        {menuItems.map((menuItem) => (
          <MenuLink key={menuItem.title} items={menuItem} />
        ))}
      </div>
    </div>
  )
}

export default Sidebar