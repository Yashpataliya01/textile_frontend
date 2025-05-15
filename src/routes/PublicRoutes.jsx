import { lazy } from "react";
import Public from "../layout/Public";
import FabricList from "../pages/fabriclibrary/component/fabricList/FabricList";
import SubProducts from "../pages/fabriclibrary/component/products/component/subProducts/SubProducts";
import ProductsList from "../pages/fabriclibrary/component/products/component/productsList/ProductsList";
import AboutUs from "../pages/aboutUs/AboutUs";

const Home = lazy(() => import("../pages/home/Home"));

const FabricLibrary = lazy(() =>
  import("../pages/fabriclibrary/FabricLibrary")
);

const Products = lazy(() =>
  import("../pages/fabriclibrary/component/products/Products")
);

const Blogs = lazy(() => import("../pages/blogs/blogs"));
const Contact = lazy(() => import("../pages/contact/contact"));

export const publicRoutes = [
  {
    path: "/",
    element: <Public />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "library",
        element: <FabricLibrary />, // has <Outlet />
        children: [
          {
            index: true,
            element: <FabricList />,
          },
          {
            path: ":id",
            element: <Products />, // ✅ This wraps ProductsList and has <Outlet />
            children: [
              {
                index: true,
                element: <ProductsList />,
              },
              {
                path: "subproducts",
                element: <SubProducts />,
              },
            ],
          },
        ],
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
];
