import { lazy } from "react";
import Public from "../layout/Public.jsx";
import FabricList from "../pages/fabriclibrary/component/fabricList/FabricList.jsx";
import SubProducts from "../pages/fabriclibrary/component/products/component/subProducts/SubProducts.jsx";
import ProductsList from "../pages/fabriclibrary/component/products/component/productsList/ProductsList.jsx";
import AboutUs from "../pages/aboutUs/AboutUs.jsx";

const Home = lazy(() => import("../pages/home/Home.jsx"));

const FabricLibrary = lazy(() =>
  import("../pages/fabriclibrary/FabricLibrary.jsx")
);

const Products = lazy(() =>
  import("../pages/fabriclibrary/component/products/Products.jsx")
);

const OurBlogs = lazy(() => import("../pages/ourBlogs/OurBlogs.jsx"));
const Contact = lazy(() => import("../pages/contactUs/ContactUs.jsx"));

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
        element: <OurBlogs />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
];
