import Hero from "../components/home/hero/Hero";
import Categories from "../components/home/categories/Categories";
import FeaturedProducts from "../components/home/featured-products/FeaturedProducts";
import NovaAI from "../components/home/nova-ai/NovaAI";
import WhyNovaCart from "../components/home/why-nova-cart/WhyNovaCart";
import Testimonials from "../components/home/testimonials/Testimonials";

const Home = () => {
  return (
    <> 
    <Hero />
    <Categories />
    <FeaturedProducts />  
    <NovaAI />
    <WhyNovaCart />
    <Testimonials />
    </>
  );
};

export default Home;