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

const SubProductsImages = lazy(() =>
  import(
    "../pages/fabriclibrary/component/products/component/subProductsImages/SubProductsImages.jsx"
  )
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
        element: <FabricLibrary />,
        children: [
          {
            index: true,
            element: <FabricList />,
          },
          {
            path: ":categoryId",
            element: <Products />,
            children: [
              {
                index: true,
                element: <ProductsList />,
              },
              {
                path: ":productId",
                element: <SubProducts />,
              },
              {
                path: ":productId/:subProducImagetId",
                element: <SubProductsImages />,
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
