import PropTypes from "prop-types";
import styles from "./order-list.module.css";

const OrderList = ({ className = "" }) => {
  return (
    <footer className={[styles.orderList, className].join(" ")}>
      <div className={styles.recentOrdersParent}>
        <h3 className={styles.recentOrders}>Recent Orders</h3>
        <img
          className={styles.phdotsThreeVerticalBoldIcon}
          loading="lazy"
          alt=""
          src="/phdotsthreeverticalbold-1.svg"
        />
      </div>
      <div className={styles.ordersDivider} />
      <div className={styles.ordersTableHeader}>
        <div className={styles.orderItem}>
          <div className={styles.orderSelect}>
            <input className={styles.checkbox} type="checkbox" />
          </div>
          <div className={styles.orderName}>
            <div className={styles.product}>Product</div>
          </div>
        </div>
        <div className={styles.ordersHeaderColumns}>
          <div className={styles.orderId}>Order ID</div>
        </div>
        <div className={styles.ordersHeaderColumns1}>
          <div className={styles.date}>Date</div>
        </div>
        <div className={styles.ordersHeaderColumns2}>
          <div className={styles.customerName}>Customer Name</div>
        </div>
        <div className={styles.ordersHeaderColumns3}>
          <div className={styles.status}>Status</div>
        </div>
        <div className={styles.ordersHeaderColumns4}>
          <div className={styles.amount}>Amount</div>
        </div>
      </div>
      <div className={styles.orderHeaders}>
        <div className={styles.orderHeaderLabelsContainer}>
          <div className={styles.orderHeaderLabels}>
            <input className={styles.checkbox1} type="checkbox" />
            <div className={styles.orderNamesContainer}>
              <div className={styles.loremIpsum}>Lorem Ipsum</div>
            </div>
          </div>
        </div>
        <div className={styles.emptyOrderHeaders}>
          <div className={styles.orderDatesContainer}>#25426</div>
        </div>
        <div className={styles.orderDateColumn}>
          <div className={styles.nov8th2023}>Nov 8th,2023</div>
        </div>
        <div className={styles.orderStatusIconColumn}>
          <img
            className={styles.orderStatusIcon}
            loading="lazy"
            alt=""
            src="/ellipse-1@2x.png"
          />
          <div className={styles.kavinWrapper}>
            <div className={styles.kavin}>Kavin</div>
          </div>
        </div>
        <div className={styles.orderDeliveryStatusColumn}>
          <div className={styles.orderDeliveryStatus}>
            <div className={styles.orderDeliveryIconColumn}>
              <div className={styles.orderDeliveryIcon} />
            </div>
            <div className={styles.delivered}>Delivered</div>
          </div>
        </div>
        <div className={styles.orderAmountColumn}>
          <div className={styles.r20000}>R200.00</div>
        </div>
      </div>
      <div className={styles.orderHeaders1}>
        <div className={styles.orderHeadersInner}>
          <div className={styles.checkboxParent}>
            <input className={styles.checkbox2} type="checkbox" />
            <div className={styles.loremIpsumWrapper}>
              <div className={styles.loremIpsum1}>Lorem Ipsum</div>
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.div}>#25425</div>
        </div>
        <div className={styles.nov7th2023Wrapper}>
          <div className={styles.nov7th2023}>Nov 7th,2023</div>
        </div>
        <div className={styles.ellipseParent}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/ellipse-1-1@2x.png"
          />
          <div className={styles.komaelWrapper}>
            <div className={styles.komael}>Komael</div>
          </div>
        </div>
        <div className={styles.orderHeadersChild}>
          <div className={styles.frameParent}>
            <div className={styles.ellipseWrapper}>
              <div className={styles.frameItem} />
            </div>
            <div className={styles.canceled}>Canceled</div>
          </div>
        </div>
        <div className={styles.r20000Wrapper}>
          <div className={styles.r200001}>R200.00</div>
        </div>
      </div>
      <div className={styles.orderHeaders2}>
        <div className={styles.frameDiv}>
          <div className={styles.checkboxGroup}>
            <input className={styles.checkbox3} type="checkbox" />
            <div className={styles.loremIpsumContainer}>
              <div className={styles.loremIpsum2}>Lorem Ipsum</div>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.div1}>#25424</div>
        </div>
        <div className={styles.nov6th2023Wrapper}>
          <div className={styles.nov6th2023}>Nov 6th,2023</div>
        </div>
        <div className={styles.ellipseGroup}>
          <img
            className={styles.frameInner}
            loading="lazy"
            alt=""
            src="/ellipse-1-2@2x.png"
          />
          <div className={styles.nikhilWrapper}>
            <div className={styles.nikhil}>Nikhil</div>
          </div>
        </div>
        <div className={styles.orderHeadersInner1}>
          <div className={styles.frameGroup}>
            <div className={styles.ellipseContainer}>
              <div className={styles.ellipseDiv} />
            </div>
            <div className={styles.delivered1}>Delivered</div>
          </div>
        </div>
        <div className={styles.r20000Container}>
          <div className={styles.r200002}>R200.00</div>
        </div>
      </div>
      <div className={styles.orderHeaders3}>
        <div className={styles.orderHeadersInner2}>
          <div className={styles.checkboxContainer}>
            <img
              className={styles.checkboxIcon}
              alt=""
              src="/checkbox-4@2x.png"
            />
            <div className={styles.loremIpsumFrame}>
              <div className={styles.loremIpsum3}>Lorem Ipsum</div>
            </div>
          </div>
        </div>
        <div className={styles.frame}>
          <div className={styles.div2}>#25423</div>
        </div>
        <div className={styles.nov5th2023Wrapper}>
          <div className={styles.nov5th2023}>Nov 5th,2023</div>
        </div>
        <div className={styles.ellipseParent1}>
          <img
            className={styles.ellipseIcon}
            alt=""
            src="/ellipse-1-3@2x.png"
          />
          <div className={styles.shivamWrapper}>
            <div className={styles.shivam}>Shivam</div>
          </div>
        </div>
        <div className={styles.orderHeadersInner3}>
          <div className={styles.frameContainer}>
            <div className={styles.ellipseFrame}>
              <div className={styles.frameChild1} />
            </div>
            <div className={styles.canceled1}>Canceled</div>
          </div>
        </div>
        <div className={styles.wrapper1}>
          <div className={styles.div3}>₹200.00</div>
        </div>
      </div>
      <div className={styles.orderHeaders4}>
        <div className={styles.orderHeadersInner4}>
          <div className={styles.checkboxParent1}>
            <img
              className={styles.checkboxIcon1}
              alt=""
              src="/checkbox-4@2x.png"
            />
            <div className={styles.loremIpsumWrapper1}>
              <div className={styles.loremIpsum4}>Lorem Ipsum</div>
            </div>
          </div>
        </div>
        <div className={styles.wrapper2}>
          <div className={styles.div4}>#25422</div>
        </div>
        <div className={styles.nov4th2023Wrapper}>
          <div className={styles.nov4th2023}>Nov 4th,2023</div>
        </div>
        <div className={styles.ellipseParent2}>
          <img
            className={styles.frameChild2}
            alt=""
            src="/ellipse-1-4@2x.png"
          />
          <div className={styles.shadabWrapper}>
            <div className={styles.shadab}>Shadab</div>
          </div>
        </div>
        <div className={styles.orderHeadersInner5}>
          <div className={styles.frameParent1}>
            <div className={styles.ellipseWrapper1}>
              <div className={styles.frameChild3} />
            </div>
            <div className={styles.delivered2}>Delivered</div>
          </div>
        </div>
        <div className={styles.wrapper3}>
          <div className={styles.div5}>₹200.00</div>
        </div>
      </div>
      <div className={styles.orderHeaders5}>
        <div className={styles.orderHeadersInner6}>
          <div className={styles.checkboxParent2}>
            <img
              className={styles.checkboxIcon2}
              alt=""
              src="/checkbox-4@2x.png"
            />
            <div className={styles.loremIpsumWrapper2}>
              <div className={styles.loremIpsum5}>Lorem Ipsum</div>
            </div>
          </div>
        </div>
        <div className={styles.wrapper4}>
          <div className={styles.div6}>#25421</div>
        </div>
        <div className={styles.nov2nd2023Wrapper}>
          <div className={styles.nov2nd2023}>Nov 2nd,2023</div>
        </div>
        <div className={styles.ellipseParent3}>
          <img
            className={styles.frameChild4}
            alt=""
            src="/ellipse-1-5@2x.png"
          />
          <div className={styles.yogeshWrapper}>
            <div className={styles.yogesh}>Yogesh</div>
          </div>
        </div>
        <div className={styles.orderHeadersInner7}>
          <div className={styles.frameParent2}>
            <div className={styles.ellipseWrapper2}>
              <div className={styles.frameChild5} />
            </div>
            <div className={styles.delivered3}>Delivered</div>
          </div>
        </div>
        <div className={styles.wrapper5}>
          <div className={styles.div7}>₹200.00</div>
        </div>
      </div>
    </footer>
  );
};

OrderList.propTypes = {
  className: PropTypes.string,
};

export default OrderList;
