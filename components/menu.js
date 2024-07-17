import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./menu.module.css";
import Link from "next/link";

const Menu = ({
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

  // MAIN LINKS
  const MainLinks = [
    {
      id: 2,
      name: "Dashboard",
      route: "dashboard",
      class: styles.smartHomeIcon,
      sources: smartHome,
    },
    {
      id: 3,
      name: "Order Management",
      route: "order_management",
      class: styles.shoppingCartIcon,
      sources: shoppingCart,
    },
    {
      id: 4,
      name: "Customers",
      route: "customers",
      class: styles.usersIcon,
      sources: users,
    },
    {
      id: 5,
      name: "Marketing",
      route: "market",
      class: styles.ticketIcon,
      sources: ticket,
    },
    {
      id: 6,
      name: "Reports",
      route: "report",
      class: styles.fileTextIcon,
      sources: fileText,
    },
    {
      id: 7,
      name: "Messages",
      route: "messages",
      class: styles.starIcon,
      sources: star,
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
            return (
              <Link href={link.route} key={link.id}>
                <div className={styles.list}>
                  <img className={link.class} alt="" src={link.sources} />
                  <a className={styles.dashboard}>{link?.name}</a>
                  <div className={styles.badge}>
                    <div className={styles.div}>3</div>
                  </div>
                </div>
              </Link>
            );
          })}

          {/* <div className={styles.list1}>
            <img
              className={styles.shoppingCartIcon}
              loading="lazy"
              alt=""
              src={shoppingCart}
            />
            <div className={styles.orderManagement}>Order Management</div>
            <img
              className={styles.chevronRightIcon}
              alt=""
              src={chevronRight}
            />
          </div>

          <div className={styles.list2}>
            <img
              className={styles.usersIcon}
              loading="lazy"
              alt=""
              src={users}
            />
            <div className={styles.customers}>Customers</div>
            <img
              className={styles.chevronRightIcon1}
              alt=""
              src={chevronRight1}
            />
          </div>

          <div className={styles.list3}>
            <img
              className={styles.ticketIcon}
              loading="lazy"
              alt=""
              src={ticket}
            />
            <div className={styles.marketing}>Marketing</div>
            <img
              className={styles.chevronRightIcon2}
              alt=""
              src={chevronRight2}
            />
          </div>

          <div className={styles.list4}>
            <img
              className={styles.fileTextIcon}
              loading="lazy"
              alt=""
              src={fileText}
            />
            <div className={styles.reports}>Reports</div>
            <img
              className={styles.chevronRightIcon3}
              alt=""
              src={chevronRight3}
            />
          </div>

          <div className={styles.list5}>
            <img className={styles.starIcon} loading="lazy" alt="" src={star} />
            <div className={styles.messages}>Messages</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

Menu.propTypes = {
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

export default Menu;

{
  /* PRODUCTS */
}
//  <div className={styles.section1}>
//  <div className={styles.products}>PRODUCTS</div>
// </div>
// <div className={styles.appsPages1}>
//  <button className={styles.list6}>
//    <img
//      className={styles.circlePlusIcon}
//      loading="lazy"
//      alt=""
//      src={circlePlus}
//    />
//    <div className={styles.addProducts}>Add Products</div>
//    <img
//      className={styles.chevronRightIcon4}
//      alt=""
//      src={chevronRight4}
//    />
//  </button>
//  <div className={styles.list7}>
//    <img className={styles.boxIcon} loading="lazy" alt="" src={box} />
//    <div className={styles.productList}>Product List</div>
//    <img
//      className={styles.chevronRightIcon5}
//      alt=""
//      src={chevronRight5}
//    />
//  </div>
// </div>
// {/* ADMIN */}
// <div className={styles.section2}>
//  <div className={styles.admin}>ADMIN</div>
// </div>
// <div className={styles.components}>
//  <div className={styles.list8}>
//    <img
//      className={styles.userCircleIcon}
//      loading="lazy"
//      alt=""
//      src={userCircle}
//    />
//    <div className={styles.stores}>Stores</div>
//    <div className={styles.badge1}>
//      <div className={styles.div1}>4</div>
//    </div>
//    <img
//      className={styles.chevronRightIcon6}
//      alt=""
//      src={chevronRight6}
//    />
//  </div>
//  <div className={styles.list9}>
//    <img
//      className={styles.settingsIcon}
//      loading="lazy"
//      alt=""
//      src={settings}
//    />
//    <div className={styles.adminRoles}>Admin Roles</div>
//    <img
//      className={styles.chevronRightIcon7}
//      alt=""
//      src={chevronRight7}
//    />
//  </div>
// </div>
// <div className={styles.list10}>
//  <img
//    className={styles.userCircleIcon1}
//    loading="lazy"
//    alt=""
//    src={userCircle1}
//  />
//  <div className={styles.manageAdmins}>Manage Admins</div>
//  <div className={styles.badge2}>
//    <div className={styles.div2}>4</div>
//  </div>
//  <img
//    className={styles.chevronRightIcon8}
//    alt=""
//    src={chevronRight8}
//  />
// </div>
// <div className={styles.list11}>
//  <img
//    className={styles.userCircleIcon2}
//    loading="lazy"
//    alt=""
//    src={userCircle2}
//  />
//  <div className={styles.tickets}>Tickets</div>
//  <div className={styles.badge3}>
//    <div className={styles.div3}>4</div>
//  </div>
//  <img
//    className={styles.chevronRightIcon9}
//    alt=""
//    src={chevronRight9}
//  />
// </div>
// <div className={styles.list12}>
//  <img
//    className={styles.userCircleIcon3}
//    loading="lazy"
//    alt=""
//    src={userCircle3}
//  />
//  <div className={styles.settings}>Settings</div>
//  <div className={styles.badge4}>
//    <div className={styles.div4}>4</div>
//  </div>
//  <img
//    className={styles.chevronRightIcon10}
//    alt=""
//    src={chevronRight10}
//  />
// </div>
