import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext";
import FrontendContextProvider from "./contexts/FrontendContext";
import SettingContextProvider from "./contexts/SettingContext";
import { AuthForgetPassword, AuthLogin, AuthRegister } from "./pages/auth/AuthPageList";

import { BackendIndex, BackendProductAllCategory, BackendProductAllProducts, BackendProductCreateCategory, BackendProductCreateProduct, BackendProductDetails, BackendProductEditCategory, BackendProductUpdateProduct } from "./pages/backend/BackendPagesList";
import { FrontendAboutUs, FrontendAllProducts, FrontendCart, FrontendContact, FrontendHome, FrontendNotFound, FrontendProductDetails, FrontendProfile, FrontendProfileCartList, FrontendProfileDashboard, FrontendProfileLogout, FrontendProfileOrderList, FrontendProfilePayments, FrontendProfileSettings, FrontendProfileWishList } from "./pages/frontend/FrontendPagesList";

import BackendLayout from "./pages/layouts/BackendLayout";
import FrontendLayout from "./pages/layouts/FrontendLayout";
import AuthAdminRoute from "./routes/AuthAdminRoute";
import AuthCustomerRoute from "./routes/AuthCustomerRoute";
// import AuthRoute from "./routes/AuthRoute";

function App() {

    return (
        <SettingContextProvider>
            <AuthContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={
                            <FrontendContextProvider>
                                <FrontendLayout />
                            </FrontendContextProvider>
                        }>
                            <Route index element={<FrontendHome />} />
                            <Route path="products" element={<FrontendAllProducts />} />
                            <Route path="product-details" element={<FrontendProductDetails />} />
                            <Route path="about" element={<FrontendAboutUs />} />
                            <Route path="cart" element={<FrontendCart />} />

                            <Route path="profile" element={<AuthCustomerRoute><FrontendProfile /></AuthCustomerRoute>} >
                                <Route index element={<FrontendProfileDashboard />} />
                                <Route path="dashboard" element={<FrontendProfileDashboard />} />
                                <Route path="cart-list" element={<FrontendProfileCartList />} />
                                <Route path="order-list" element={<FrontendProfileOrderList />} />
                                <Route path="wishlist" element={<FrontendProfileWishList />} />
                                <Route path="payments" element={<FrontendProfilePayments />} />
                                <Route path="settings" element={<FrontendProfileSettings />} />
                                <Route path="logout" element={<FrontendProfileLogout />} />
                            </Route>

                            <Route path="contact" element={<FrontendContact />} />
                            <Route path="login" element={<AuthLogin />} />
                            <Route path="register" element={<AuthRegister />} />
                            <Route path="forget-password" element={<AuthForgetPassword />} />
                            <Route path="*" element={<FrontendNotFound />} />
                        </Route>

                        <Route path="/dashboard" element={<AuthAdminRoute><BackendLayout /></AuthAdminRoute>}>
                            <Route index element={<BackendIndex />} />
                            <Route path="products" element={<BackendProductAllProducts />} />
                            <Route path="product/create" element={<BackendProductCreateProduct />} />
                            <Route path="product/update/:id/:title" element={<BackendProductUpdateProduct />} />
                            <Route path="product/details/:id" element={<BackendProductDetails />} />

                            <Route path="categories" element={<BackendProductAllCategory />} />
                            <Route path="category/create" element={<BackendProductCreateCategory />} />
                            <Route path="category/edit/:id/:title" element={<BackendProductEditCategory />} />
                        </Route>

                    </Routes>
                </BrowserRouter>
            </AuthContextProvider>
        </SettingContextProvider>
    );
}

export default App;
