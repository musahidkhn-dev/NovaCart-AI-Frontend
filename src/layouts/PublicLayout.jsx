import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../components/navigation/navbar/Navbar";
import ScrollToTop from "../components/navigation/ScrollToTop";

const PublicLayout = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />

      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
    </>
  );
};

export default PublicLayout;