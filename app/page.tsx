import Link from "next/link";
import ButtonSignin from "@/components/ButtonSignin";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

import Problem from "@/components/Problem";
import WithWithout from "@/components/WithWithout";
import { Features } from "@headlessui/react/dist/utils/render";
import FeaturesListicle from "@/components/FeaturesListicle";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import Pricing from "@/components/Pricing";
import Blog from "./blog/page";
import FAQ from "@/components/FAQ";
import Testimonial from "@/components/Testimonials1";
import Footer from "@/components/Footer";
import Testimonials11 from "@/components/Testimonials11";

export default function Page() {
  return (
    <>
     <Header/>
     <Hero/>
     <Problem/>
     <WithWithout/>
    <FeaturesListicle/>
    <Pricing />
    <Blog />
    <FAQ />
    <Testimonials11/>
    <Footer /> 

    </>
  );
}
