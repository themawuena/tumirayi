import SideBar from "../SideBar/menu";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <SideBar
        smartHome="/smarthome2.svg"
        chevronDown="/chevrondown.svg"
        shoppingCart="/shoppingcart2.svg"
        chevronRight="/chevronright.svg"
        users="/users2.svg"
        chevronRight1="/chevronright.svg"
        ticket="/ticket2.svg"
        chevronRight2="/chevronright.svg"
        fileText="/filetext2.svg"
        chevronRight3="/chevronright.svg"
        star="/star1.svg"
        circlePlus="/circleplus2.svg"
        chevronRight4="/chevronright.svg"
        box="/box2.svg"
        chevronRight5="/chevronright.svg"
        userCircle="/usercircle2.svg"
        chevronRight6="/chevronright.svg"
        settings="/settings1.svg"
        chevronRight7="/chevronright.svg"
        userCircle1="/usercircle2.svg"
        chevronRight8="/chevronright.svg"
        userCircle2="/usercircle2.svg"
        chevronRight9="/chevronright.svg"
        userCircle3="/usercircle2.svg"
        chevronRight10="/chevronright.svg"
        menuHeight="unset"
        menuOverflow="unset"
      />
      <div className="content">{children}</div>
      <style jsx>{`
        .layout {
          display: flex;
        }
        .content {
          flex: 1;
          padding: 20px;
        }
      `}</style>
    </div>
  );
};

export default Layout;
