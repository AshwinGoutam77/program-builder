import AboutUs from "@/components/about-us/page";
import Alumni from "@/components/aluminies/page";
import Banner from "@/components/banner/page";
import CaseStudy from "@/components/case-study/page";
import CourseCurriculum from "@/components/course-curriculum/page";
import CTA from "@/components/cta/page";
import PhotoGallery from "@/components/gallery/page";
import Header from "@/components/header/header";
import Pricing from "@/components/pricing/page";
import ProductManagement from "@/components/product-management/page";
import ProgramTabsSection from "@/components/program-tabs/page";
import ProjectOverview from "@/components/project-overview/page";
import Testimonials from "@/components/testimonails/page";
import VideoTestimonialSlider from "@/components/video-testimonials/page";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="main-section">
        <Header />
        <Banner />
        <ProductManagement />
      </div>
      <ProgramTabsSection />
      <ProjectOverview />
      <AboutUs />
      <CTA />
      <CourseCurriculum />
      <Pricing />
      <CaseStudy />
      <VideoTestimonialSlider />
      <Alumni />
      <Testimonials />
      <PhotoGallery />
    </>
  );
}
