import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./menu.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const SideBar = ({
  className = "",
  smartHome,
  chevronDown,
  shoppingCart,
  chevronRight,
  users,
  chevronRight1,
  ticket,
  chevronRight2,
  fileText,
  chevronRight3,
  star,
  circlePlus,
  chevronRight4,
  box,
  chevronRight5,
  userCircle,
  chevronRight6,
  settings,
  chevronRight7,
  userCircle1,
  chevronRight8,
  userCircle2,
  chevronRight9,
  userCircle3,
  chevronRight10,
  menuHeight,
  menuOverflow,
}) => {
  const menuStyle = useMemo(() => {
    return {
      height: menuHeight,
      overflow: menuOverflow,
    };
  }, [menuHeight, menuOverflow]);

  const router = useRouter();

  // MAIN LINKS
  const MainLinks = [
    {
      id: 2,
      name: "Dashboard",
      route: "/dashboard",
      class: styles.smartHomeIcon,
      sources: smartHome,
    },
    {
      id: 3,
      name: "Order Management",
      route: "/order_management",
      class: styles.smartHomeIcon,
      sources: shoppingCart,
    },
    {
      id: 4,
      name: "Customers",
      route: "/customers",
      class: styles.usersIcon,
      sources: users,
    },
    {
      id: 5,
      name: "Marketing",
      route: "/marketing",
      class: styles.ticketIcon,
      sources: ticket,
    },
    {
      id: 6,
      name: "Reports",
      route: "/report",
      class: styles.fileTextIcon,
      sources: fileText,
    },
    {
      id: 7,
      name: "Messages",
      route: "/messages",
      class: styles.starIcon,
      sources: star,
    },
  ];

  // PRODUCTS
  const ProductLinks = [
    {
      id: 2,
      name: "Add Products",
      route: "/product/new",
      class: styles.smartHomeIcon,
      sources: smartHome,
    },
    {
      id: 3,
      name: "Product List",
      route: "/product",
      class: styles.shoppingCartIcon,
      sources: shoppingCart,
    },
  ];
  // ADMIN LINKS
  const AdminLinks = [
    {
      id: 2,
      name: "Stores",
      route: "/stores",
      class: styles.smartHomeIcon,
      sources: userCircle1,
    },
    {
      id: 3,
      name: "Admin Roles",
      route: "/roles",
      class: styles.shoppingCartIcon,
      sources: settings,
    },
    {
      id: 4,
      name: "Manage Admins",
      route: "/manage",
      class: styles.smartHomeIcon,
      sources: userCircle1,
    },
    {
      id: 5,
      name: "Tickets",
      route: "/tickets",
      class: styles.shoppingCartIcon,
      sources: userCircle1,
    },
    {
      id: 6,
      name: "Settings",
      route: "/settings",
      class: styles.shoppingCartIcon,
      sources: settings,
    },
  ];

  return (
    <div className={[styles.menu, className].join(" ")} style={menuStyle}>
      <div className={styles.menu1}>
        <div className={styles.logo}>
          <img
            className={styles.tumirayi5Icon}
            loading="lazy"
            alt=""
            src="/tumirayi-5@2x.png"
          />
        </div>
        {/* MAIN MENU */}
        <div className={styles.section}>
          <div className={styles.mainMenu}>MAIN MENU</div>
        </div>
        <div className={styles.appsPages}>
          {MainLinks.map((link) => {
            const isActive = link.route === router.pathname;
            return (
              <Link
                className={`${styles.list} ${isActive ? styles.active : ""}`}
                href={link.route}
                key={link.id}
              >
                <img className={link.class} alt="" src={link.sources} />
                <div
                  className={`${styles.dashboard} ${
                    isActive ? styles.active : ""
                  }`}
                >
                  {link.name}
                </div>
                <div className={styles.badge}>
                  <div className={styles.div}>3</div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className={styles.section} style={{ marginTop: "20px" }}>
          <div className={styles.mainMenu}>PRODUCTS</div>
        </div>
        <div className={styles.appsPages}>
          {ProductLinks.map((link) => {
            const isActive = link.route === router.pathname;
            return (
              <Link
                className={`${styles.list} ${isActive ? styles.active : ""}`}
                href={link.route}
                key={link.id}
              >
                <img className={link.class} alt="" src={link.sources} />
                <div
                  className={`${styles.dashboard} ${
                    isActive ? styles.active : ""
                  }`}
                >
                  {link.name}
                </div>
                <div className={styles.badge}>
                  <div className={styles.div}>3</div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className={styles.section} style={{ marginTop: "20px" }}>
          <div className={styles.mainMenu}>ADMIN</div>
        </div>
        <div className={styles.appsPages}>
          {AdminLinks.map((link) => {
            const isActive = link.route === router.pathname;
            return (
              <Link
                className={`${styles.list} ${isActive ? styles.active : ""}`}
                href={link.route}
                key={link.id}
              >
                <img className={link.class} alt="" src={link.sources} />
                <div
                  className={`${styles.dashboard} ${
                    isActive ? styles.active : ""
                  }`}
                >
                  {link.name}
                </div>
                <div className={styles.badge}>
                  <div className={styles.div}>3</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  className: PropTypes.string,
  smartHome: PropTypes.string,
  chevronDown: PropTypes.string,
  shoppingCart: PropTypes.string,
  chevronRight: PropTypes.string,
  users: PropTypes.string,
  chevronRight1: PropTypes.string,
  ticket: PropTypes.string,
  chevronRight2: PropTypes.string,
  fileText: PropTypes.string,
  chevronRight3: PropTypes.string,
  star: PropTypes.string,
  circlePlus: PropTypes.string,
  chevronRight4: PropTypes.string,
  box: PropTypes.string,
  chevronRight5: PropTypes.string,
  userCircle: PropTypes.string,
  chevronRight6: PropTypes.string,
  settings: PropTypes.string,
  chevronRight7: PropTypes.string,
  userCircle1: PropTypes.string,
  chevronRight8: PropTypes.string,
  userCircle2: PropTypes.string,
  chevronRight9: PropTypes.string,
  userCircle3: PropTypes.string,
  chevronRight10: PropTypes.string,

  /** Style props */
  menuHeight: PropTypes.any,
  menuOverflow: PropTypes.any,
};

export default SideBar;
