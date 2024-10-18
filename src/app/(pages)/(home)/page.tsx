import AboutUs from "@/app/(mainsite)/components/homepage/AboutUs/AboutUs";
import FAQ from "@/app/(mainsite)/components/homepage/FAQ/FAQ";
import Header from "@/app/(mainsite)/components/homepage/Header/Header";
import HorizontalFreeQuoteForm from "@/app/(mainsite)/components/homepage/HorizontalFreeQuoteForm/HorizontalFreeQuoteForm";
import ServiceArea from "@/app/(mainsite)/components/homepage/ServiceArea/ServiceArea";
import Services from "@/app/(mainsite)/components/homepage/Services/Services";
import StatsRibbon from "@/app/(mainsite)/components/homepage/StatsRibbon/StatsRibbon";
import serviceAreaData from "@/app/(mainsite)/data/serviceAreaData";


export default function Home() {
  return (
    <>
      <Header />
      <HorizontalFreeQuoteForm />
      <AboutUs />
      <StatsRibbon />
      <Services />
      <FAQ />
      <ServiceArea areaData={serviceAreaData} mapURL="https://www.google.com/maps/d/u/0/embed?mid=1PktzGv5iDzyhwKtXVyCzUv_nECs8sRQ&ehbc=2E312F" />
    </>
  )
}
