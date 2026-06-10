import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeLayout, LegalLayout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route element={<LegalLayout />}>
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/privacy/" element={<PrivacyPolicyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
