import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import HomePage from "./pages/HomePage";
import StudentOnboarding from "./pages/student/StudentOnboarding";
import StudentHome from "./pages/student/StudentHome";
import StudentRequest from "./pages/student/StudentRequest";
import DriverDashboard from "./pages/driver/DriverDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import SystemArchitecture from "./pages/SystemArchitecture";
import AutomationLogic from "./pages/AutomationLogic";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "onboarding", Component: StudentOnboarding },
      { path: "student/home", Component: StudentHome },
      { path: "student/request", Component: StudentRequest },
      { path: "driver", Component: DriverDashboard },
      { path: "admin", Component: AdminDashboard },
      { path: "architecture", Component: SystemArchitecture },
      { path: "automation", Component: AutomationLogic },
    ],
  },
]);
