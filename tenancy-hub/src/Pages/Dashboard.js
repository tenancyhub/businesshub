import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddFormProduct from "./AddProductForm/AddFormProduct";
import CreateShop from "./CreateShop/CreateShop";
import Notification from "./Dashboard/Notification/Notification";
import Products from "./Products";
import { NavLink } from "react-router-dom";

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.

// We are going to use this route config in 2
// spots: once for the sidebar and once in the main
// content section. All routes are in the same
// order they would appear in a <Switch>.
const routes = [
  {
    path: "/admin",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>,
  },

  {
    path: "/notification",
    sidebar: () => <div>Notification</div>,
    main: () => <Notification />,
  },
  {
    path: "/add-product",
    sidebar: () => <div>Product</div>,
    main: () => <AddFormProduct />,
  },
  {
    path: "/order",
    sidebar: () => <div>Order</div>,
    main: () => <h2>Order</h2>,
  },
  {
    path: "/create-shop",
    sidebar: () => <div>Create Shop</div>,
    main: () => <CreateShop />,
  },
  {
    path: "/shop",
    sidebar: () => <div>Online Store</div>,
    main: () => <Products />,
  },
  {
    path: "/settings",
    sidebar: () => <div>Setting</div>,
    main: () => <h2>Setting</h2>,
  },
];

const SidebarExample = () => {
  const activeStyle = {
    background: "rgba(140, 145, 150, 1)",
  };
  const [sidebar, setSidebar] = useState("true");
  const [user, setUserDetails] = useState({});
  const [veiw, setVeiw] = useState("false");

  const toggleSideBar = () => {
    setVeiw(!veiw);
  };
  const toggleSide = () => {
    setSidebar(!sidebar);
  };
  return (
    <Router>
      <div className="container-fluid">
        <div
          className="sidebar"
          style={{
            padding: "10px",
            width: "250px",
            // background: "#f0f0f0",
          }}
        >
          <NavLink to="/admin" activeStyle={activeStyle}>
            <span className="fas fa-home">{""}</span> Home{" "}
          </NavLink>
          <NavLink
            to="/notification"
            onClick={toggleSideBar}
            activeStyle={activeStyle}
          >
            <span className="fas fa-envelope">{""}</span> Notification{" "}
          </NavLink>
          <NavLink
            to="/add-product"
            onClick={toggleSideBar}
            activeStyle={activeStyle}
          >
            <span className="fas fa-plus-square">{""}</span> Products{" "}
          </NavLink>
          <NavLink to="/admin" activeStyle={activeStyle}>
            <span className="fas fa-inbox">{""}</span> Orders{" "}
          </NavLink>
          {/* <NavLink to="/admin" activeStyle={activeStyle}>
          <span className="fas fa-user">{""}</span> Customers{" "}
        </NavLink> */}
          <NavLink to="/create-shop" activeStyle={activeStyle}>
            <span className="fas fa-store">{""}</span> Create Shop{" "}
          </NavLink>
          <NavLink to="/shop" activeStyle={activeStyle}>
            <span className="fas fa-store">{""}</span> Online-Store{" "}
          </NavLink>
          <NavLink to="/admin" activeStyle={activeStyle}>
            <span className="fas fa-user-cog">{""}</span> Setting{" "}
          </NavLink>

          {/* <Switch>
            {routes.map((route, index) => (
              
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch> */}
        </div>

        <div>
          <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
};
export default SidebarExample;
