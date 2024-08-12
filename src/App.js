// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home/Home';
import CompanyOverview from './Pages/AboutUs/CompanyOverview';
import Team from './Pages/AboutUs/Team';
import Careers from './Pages/AboutUs/Careers';
//import InfrastructureSolutions from './Pages/Solutions/InfrastructureSolutions';
//import BusinessSolutions from './Pages/Solutions/BusinessSolutions';
//import IPO from './Pages/Investors/IPO';
import Financial from './Pages/Investors/Financial/Financial';
import Contact from './Pages/Contact';
import './App.css';
import Footer from './components/Footer';
import Blog from './Pages/AboutUs/Blog';
import EndUserAndDesign from './Pages/Solutions/InfrastructureSolutions/EndUserAndDesign/EndUserAndDesign';
import DataCenterSolutions from './Pages/Solutions/InfrastructureSolutions/DataCenterSolutions/DataCenterSolutions';
import ITSecuritySolution from './Pages/Solutions/InfrastructureSolutions/ITSecuritySolution/ITSecuritySolution';
import NetworkingSolutions from './Pages/Solutions/InfrastructureSolutions/NetworkingSolutions/NetworkingSolutions';
import ComputerAccessories from './Pages/Solutions/InfrastructureSolutions/ComputerAccessories/ComputerAccessories';
import AudioVideoSolutions from './Pages/Solutions/InfrastructureSolutions/AudioVideoSolutions/AudioVideoSolutions';
import PowerSolutions from './Pages/Solutions/InfrastructureSolutions/PowerSolutions/PowerSolutions';
import MobileDeviceManagment from './Pages/Solutions/DigitalBusiness/MobileDeviceManagment/MobileDeviceManagment';
import BusinessSoftware from './Pages/Solutions/DigitalBusiness/BusinessSoftware/BusinessSoftware';
import CloudServices from './Pages/Solutions/DigitalBusiness/CloudServices/CloudServices';
import FMSSolutions from './Pages/Solutions/ConsultingSolutions/FMSSolutions/FMSSolutions';
import ITInfrastructureRentingSolutions from './Pages/Solutions/ConsultingSolutions/ITInfrastructureRentingSolutions/ITInfrastructureRentingSolutions';
import ITManagedServices from './Pages/Solutions/ConsultingSolutions/ITManagedServices/ITManagedServices';
import RemoteInfrastructureManagment from './Pages/Solutions/ConsultingSolutions/RemoteInfrastructureManagment/RemoteInfrastructureManagment';
import MultibrandHardware from './Pages/Solutions/ConsultingSolutions/MultibrandHardware/MultibrandHardware';
import Draftprospect from './Pages/Investors/IPO/DraftProspect/Draftprospect';
import Prospect from './Pages/Investors/IPO/Prospect/Prospect';
import Abridgedprospect from './Pages/Investors/IPO/AbridgedProspect/Abridgedprospect';
import Materialagreements from './Pages/Investors/IPO/MaterialAgreements/Materialagreements';
import Generalinformationdocuments from './Pages/Investors/IPO/GeneralInformationDocuments/Generalinformationdocuments';
import Applicationform from './Pages/Investors/IPO/ApplicationForm/Applicationform';
import Basisallotment  from './Pages/Investors/IPO/BasisAllotment/Basisallotment';
import Shareholdingpattern from './Pages/Investors/ShareHoldingPatterns/Shareholdingpattern';
import Investorgraviance from './Pages/Investors/InvestorGraviance/Investorgraviance';
import Corporategovernance from './Pages/Investors/CorporateGovernance/Corporategovernance';
import Codepolicies from './Pages/Investors/CodePolicies/Codepolicies';
import Materialdocuments from './Pages/Investors/MaterialDocuments/Materialdocuments';
import Annaucment from './Pages/Investors/Annaucment/Annaucment';
import BSEintimation from './Pages/Investors/BSEIntimation/BSEintimation';
import Financialresult from './Pages/Investors/FinancialResult/Financialresult';
const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutus/company" element={<CompanyOverview />} />
                <Route path="/aboutus/team" element={<Team />} />
                <Route path="/aboutus/careers" element={<Careers />} />
                <Route path="/aboutus/blog" element={<Blog />} />
               
                
                <Route  path="/solutions/infrastructure-solutions/end-user-design" element={<EndUserAndDesign />} />
                <Route path="/solutions/infrastructure-solutions/data-center-solutions" element={<DataCenterSolutions />} />
                <Route path="/solutions/infrastructure-solutions/it-security-solutions" element={<ITSecuritySolution />} />
                <Route path="/solutions/infrastructure-solutions/networking-solutions" element={<NetworkingSolutions />} />
                <Route path="/solutions/infrastructure-solutions/computer-accessories" element={<ComputerAccessories />} />
                <Route path="/solutions/infrastructure-solutions/audio-video-solutions" element={<AudioVideoSolutions />} />
                <Route path="/solutions/infrastructure-solutions/power-solutions" element={<PowerSolutions />} />
                <Route path="/solutions/digital-business/mobile-device-management" element={<MobileDeviceManagment />} />
                <Route path="/solutions/digital-business/business-software" element={<BusinessSoftware />} />
                <Route path="/solutions/digital-business/cloud-services" element={<CloudServices />} />

                <Route path="/solutions/consulting-solution/fms-solutions" element={<FMSSolutions />} />
                <Route path="/solutions/consulting-solution/it-infrastructure-renting-solutions" element={<ITInfrastructureRentingSolutions />} />
                <Route path="/solutions/consulting-solution/it-managed-services"  element={<ITManagedServices />} />
                <Route path="/solutions/consulting-solution/remote-infrastructure" element={<RemoteInfrastructureManagment />} />
                <Route path="/solutions/consulting-solution/multibrand-hardware-break-fix-services-ams" element={<MultibrandHardware />} />

                
                <Route path="/investors/ipo/draft-prospect" element={<Draftprospect />} />
                <Route path="/investors/ipo/prospect" element={<Prospect />} />
                <Route path="/investors/ipo/abridged-prospect" element={<Abridgedprospect />} />
                <Route path="/investors/ipo/material-agreements" element={<Materialagreements />} />
                <Route path="/investors/ipo/general-information-documents" element={<Generalinformationdocuments />} />
                <Route path="/investors/ipo/application-form" element={<Applicationform />} />
                <Route path="/investors/ipo/basis-allotment" element={<Basisallotment />} />
                
                <Route path="/investors/financial" element={<Financial />} />
                <Route path="/investors/share-holding-pattern" element={<Shareholdingpattern />} />
                <Route path="/investors/invester-graviance" element={<Investorgraviance />} />
                <Route path="/investors/corporate-governance" element={<Corporategovernance />} />
                <Route path="/investors/code-policies" element={<Codepolicies />} />
                <Route path="/investors/material-douments" element={<Materialdocuments />} />
                <Route path="/investors/annauncment" element={<Annaucment />} />
                <Route path="/investors/bseintimation" element={<BSEintimation />} />
                <Route path="/investors/financial-result" element={<Financialresult />} />
                

                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
