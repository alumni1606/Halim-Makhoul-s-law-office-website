import { Suspense } from "react";
import { LoadingPage } from "@/components/ui/loading-spinner";
import { useRoutes, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "@/components/ui/error-boundary";
import { Toaster } from "@/components/ui/toaster";
import Home from "./components/home";
import PracticeAreasPage from "./pages/PracticeAreas";
import TeamPage from "./pages/Team";
import ContactPage from "./pages/Contact";
import FamilyLawPage from "./pages/practice-areas/FamilyLaw";
import routes from "tempo-routes";

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingPage />}>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/practice-areas" element={<PracticeAreasPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/practice-areas/family-law"
              element={<FamilyLawPage />}
            />
          </Routes>
          {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
          <Toaster />
        </>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
