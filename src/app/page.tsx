import CaseStudies from "@/app/components/CaseStudies";
import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";
import Footer from "@/app/components/Footer";
import Testimonials from "@/app/components/Testimonials";
import Form from "@/app/components/Form";

export default function Home() {
  return (
    <>
    <Header />
    <HeroSection />
    <CaseStudies />
    <Testimonials />
    <Form />
    <Footer />
    </>
  );
}
