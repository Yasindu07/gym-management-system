import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import EmployeeLogin from "./pages/EmployeeLogin";

import Header from "./components/Header";

import AdminDashboard from "./pages/AdminDashboard";
import AdminPrivateRoute from "./components/AdminPrivateRoute";
import FooterCom from "./components/Footer";
import CreateSubPackage from "./pages/subPackagePages/CreateSubPackage";

import EditSubPackage from "./pages/subPackagePages/EditSubPackage";
import ShowSubPackage from "./pages/subPackagePages/ShowSubPackage";

import AdminViewEmployeeDetails from "./components/AdminViewEmployeeDetails";
import ManagerInstructorLeave from "./components/ManagerInstructorLeave";

import Payment from "./pages/Checkout/Payment";
import ShippingPage from "./pages/Checkout/ShippingPage";
import PaymentSelection from "./pages/Checkout/PaymentSelect";
import PaymentSuccess from "./pages/Checkout/PaymentSuccess";
import CreateShippingMethod from "./components/PaymentComponents/Admin Components/ManageShipping";
import EditShipping from "./pages/Checkout/EditShipping";

import ManagerUpdateSupplements from "./components/ManagerUpdateSupplements";
// import Protein from "./pages/Protein";
import Shopping from "./pages/Cart";

import SupplementProuductView from "./pages/SupplementProuductView";
// import CartScreen from "./pages/Cart";

import YourTasks from "./pages/YourTasks";
import UpdateTasks from "./pages/UpdateTask";
import MemberView from "./pages/MemberView";
import SubscriptionPackages from "./pages/SubscriptionPackages";
import PromoSubPackage from "./pages/PromoSubPackage";
import ForgotPassword from "./pages/ForgotPassword";
import OTPVerification from "./pages/OTPVerification";
import ResetPassword from "./pages/ResetPassword";

export default function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />

        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/employee-login" element={<EmployeeLogin />} />
        <Route
          path="/SubscriptionPackages"
          element={<SubscriptionPackages />}
        />
        <Route path="/PromoSubPackage" element={<PromoSubPackage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp-verify" element={<OTPVerification />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route element={<AdminPrivateRoute />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />

          <Route
            path="/updateSupplements/:supplementId"
            element={<ManagerUpdateSupplements />}
          />

          <Route
            path="/view-employee-details/:empId"
            element={<AdminViewEmployeeDetails />}
          />
          <Route
            path="/view-instructor-request/:leaveId/:empId"
            element={<ManagerInstructorLeave />}
          />

          <Route path="/yourtasks" element={<YourTasks />} />
          <Route path="/update-tasks/:taskId" element={<UpdateTasks />} />
          <Route path="/member-view/:userId" element={<MemberView />} />
        </Route>
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        {/* <Route path ="/protein" element={<Protein/>} /> */}
        <Route
          path="/shoppingCart/:SupplementProuductId"
          element={<Shopping />}
        />

        <Route
          path="/SupplementProuductView/:SupplementProuductId"
          element={<SupplementProuductView />}
        />
      </Routes>
      <Routes>
        <Route path="/subpackages/create" element={<CreateSubPackage />} />
        <Route path="/subpackages/details/:id" element={<ShowSubPackage />} />
        <Route path="/subpackages/edit/:id" element={<EditSubPackage />} />
      </Routes>
      <Routes>
        <Route path="/Checkout/payment" element={<Payment />} />
        <Route path="/Checkout/payment/shipping" element={<ShippingPage />} />
        <Route
          path="/Checkout/payment/paymentSelect"
          element={<PaymentSelection />}
        />
        <Route path="/Checkout/payment/success" element={<PaymentSuccess />} />
        <Route path="/shipping/create" element={<CreateShippingMethod />} />
        <Route path="/shipping/edit/:id" element={<EditShipping />} />
      </Routes>
      <FooterCom />
    </BrowserRouter>
  );
}
