import { motion } from "framer-motion";
import { Sparkles, Scale, ShieldCheck, Truck } from "lucide-react";

const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFCF8] via-white to-[#FFF7EE]">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden flex-1 lg:flex lg:flex-col lg:justify-center"
        >
          <div className="mb-6 inline-flex w-fit items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            AI Powered Shopping
          </div>
          <h1 className="max-w-lg text-5xl font-black leading-tight">
            Welcome to <span className="text-primary">NovaCart AI</span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-8 text-muted">
            Discover smarter shopping with AI powered recommendations,
            comparisons and insights.
          </p>

          <div className="mt-12 flex items-end justify-between gap-12">
            {/* Features */}

            <div className="flex-1 space-y-5">
              {/* AI Recommendation */}

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <Sparkles size={20} />
                </div>

                <div>
                  <h4 className="text-[17px] font-semibold text-heading">
                    AI Recommendations
                  </h4>

                  <p className="mt-1 text-sm leading-5 text-muted">
                    Personalized picks for you
                  </p>
                </div>
              </div>

              {/* Smart Comparison */}

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <Scale size={20} />
                </div>

                <div>
                  <h4 className="text-[17px] font-semibold text-heading">
                    Smart Comparison
                  </h4>

                  <p className="mt-1 text-sm leading-5 text-muted">
                    Compare and choose best
                  </p>
                </div>
              </div>

              {/* Secure */}

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <ShieldCheck size={20} />
                </div>

                <div>
                  <h4 className="text-[17px] font-semibold text-heading">
                    Secure Checkout
                  </h4>

                  <p className="mt-1 text-sm leading-5 text-muted">
                    Your data is always protected
                  </p>
                </div>
              </div>

              {/* Delivery */}

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <Truck size={20} />
                </div>

                <div>
                  <h4 className="text-[17px] font-semibold text-heading">
                    Fast Delivery
                  </h4>

                  <p className="mt-1 text-sm leading-5 text-muted">
                    Quick and reliable delivery
                  </p>
                </div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute left-0 top-6 z-20 rounded-2xl border border-border bg-white px-4 py-3 shadow-lg"
            >
              <p className="text-xs font-semibold text-primary">AI Picks</p>

              <p className="text-xs text-muted">Personalized for you</p>
            </motion.div>
            
            {/* Illustration */}

            <div className="relative flex items-center justify-center shrink-0">
              {/* Background Glow */}
              <div className="absolute h-[380px] w-[380px] rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-3xl" />

              <motion.img
                src="/images/auth/shopping-illustration-1.png"
                alt="Shopping Illustration"
                className="relative z-10 w-[430px]"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </motion.div>
        

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 w-full max-w-md rounded-[32px] border border-white/50 bg-white/90 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.08)] backdrop-blur-md"
        >
          <h2 className="text-4xl font-black tracking-tight text-heading">{title}</h2>

          <p className="mt-3 text-[15px] leading-6 text-muted">{subtitle}</p>

          <div className="mt-8">{children}</div>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthLayout;
