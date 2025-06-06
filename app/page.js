import AboutUs from "@/components/about-us/page";
import Alumni from "@/components/aluminies/page";
import Banner from "@/components/banner/page";
import CaseStudy from "@/components/case-study/page";
import CourseCurriculum from "@/components/course-curriculum/page";
import CTA from "@/components/cta/page";
import FAQSection from "@/components/faq/page";
import Footer from "@/components/footer/page";
import VideoSlider from "@/components/gallery/page";
import PhotoGallery from "@/components/gallery/page";
import Header from "@/components/header/header";
import LaunchByAlumni from "@/components/launch-by-alumni/page";
import Network from "@/components/network/page";
import Pricing from "@/components/pricing/page";
import ProductManagement from "@/components/product-management/page";
import ProgramTabsSection from "@/components/program-tabs/page";
import ProjectOverview from "@/components/project-overview/page";
import Teaching from "@/components/teaching/page";
import Testimonials from "@/components/testimonails/page";
import VideoTestimonialSlider from "@/components/video-testimonials/page";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SuperSpecial from "@/components/superSpecial/page";
import MasterSpeaker from "@/components/master-speaker/page";

export default function Home() {
  return (
    <>
      <Header />
      <section className="main-section">
        <Banner />
        <ProductManagement />
        <ProgramTabsSection />
        <AboutUs />
      </section>
      <ProjectOverview />
      <Testimonials />
      <VideoTestimonialSlider />
      <CourseCurriculum />
      <SuperSpecial />
      <LaunchByAlumni />
      <MasterSpeaker />
      <Network />
      <Alumni />
      <VideoSlider />
      <Teaching />
      <FAQSection />
      <Footer />
    </>
  );
}
