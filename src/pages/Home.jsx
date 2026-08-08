import Hero from "../components/home/hero/Hero";
import Categories from "../components/home/categories/Categories";
import FeaturedProducts from "../components/home/featured-products/FeaturedProducts";
import NovaAI from "../components/home/nova-ai/NovaAI";
import WhyNovaCart from "../components/home/why-nova-cart/WhyNovaCart";
import Testimonials from "../components/home/testimonials/Testimonials";
import CTA from "../components/home/cta/CTA";
import Footer from "../components/home/footer/Footer";

const Home = () => {
  return (
    <> 
    <Hero />
    <Categories />
    <FeaturedProducts />  
    <NovaAI />
    <WhyNovaCart />
    <Testimonials />
    <CTA />
    <Footer />
    </>
  );
};

export default Home;