import React, { useState } from "react";

import Header from './components/header/header.component.tsx'
import Home from './components/home/home.component.tsx'
import Services from './components/services/services.component.tsx'
import Enterprise from './components/enterprise/enterprise.component.tsx'
import Contact from './components/contact/contact.component.tsx'
import Footer from './components/footer/footer.component.tsx'
import SubmissionModal from "./components/common/submission-modal.component.tsx";
import PromoBanner from "./components/home/promo-banner.component.tsx";

import "./App.css";
import PromoModal from "./components/home/promo-modal.component.tsx";
import Realisations from "./components/realisations/realisations.component.tsx";

function App() {
  const [submissionModalOpen, setSubmissionModalOpen] = useState(false);
  const [promoModalOpen, setPromoModalOpen] = useState(false);

  const openSubmissionModal = () => setSubmissionModalOpen(true);
  const closeSubmissionModal = () => setSubmissionModalOpen(false);

  const openPromoModal = () => setPromoModalOpen(true);
  const closePromoModal = () => setPromoModalOpen(false);

  return (
    <div id="app" className="App">
      <SubmissionModal isOpen={submissionModalOpen} closeHandler={closeSubmissionModal} />
      <PromoModal isOpen={promoModalOpen} closeHandler={closePromoModal} />
      <div className="App-container">
        <Header />
        <PromoBanner openPromoModal={openPromoModal} />
        <Home />
        <Enterprise openSubmissionModal={openSubmissionModal} />
        <Services />
        <Realisations />
        <Contact openSubmissionModal={openSubmissionModal} />
        <Footer openPromoModal={openPromoModal} />
      </div>
    </div>
  );
}

export default App;