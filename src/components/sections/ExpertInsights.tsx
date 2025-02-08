import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const experts = [
  {
    name: "Sam Altman",
    role: "CEO, OpenAI",
    quote: "AI will transform sales by enabling hyper-personalization and efficiency at an unprecedented scale.",
    image: "https://www.czbiohub.org/wp-content/uploads/2024/03/sam-altman.png"
  },
  {
    name: "Elon Musk",
    role: "CEO, Tesla & SpaceX",
    quote: "AI will automate most repetitive tasks, and that includes sales outreach. The question is not 'if,' but 'how soon'?",
    image: "https://hips.hearstapps.com/hmg-prod/images/elon-musk-gettyimages-2147789844-web-675b2c17301ea.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=640:*"
  },
  {
    name: "Gary Vaynerchuk",
    role: "Entrepreneur & Sales Expert",
    quote: "AI cold calling won't replace great salespeople—it'll make them 10x more efficient by handling the grunt work.",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Gary_Vaynerchuk_public_domain.jpg"
  },
  {
    name: "Marc Benioff",
    role: "CEO, Salesforce",
    quote: "The future of sales is AI-driven conversations that feel as natural as human interactions but are infinitely scalable.",
    image: "https://imageio.forbes.com/specials-images/imageserve/5f4e65f2f4c323e07eb167b8/0x0.jpg?format=jpg&crop=3500,3497,x939,y215,safe&height=416&width=416&fit=bounds"
  }
];

export function ExpertInsights() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % experts.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + experts.length) % experts.length);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-6">
            What the <span className="text-gradient">Experts</span> Say
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Industry leaders on the future of AI in sales
          </p>
        </motion.div>

        <div className="relative h-[300px] max-w-4xl mx-auto">
          <div className="absolute inset-x-0 px-16"> {/* Container for content with padding for buttons */}
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full"
              >
                <div className="bg-dark-card p-8 rounded-2xl border border-neon-green/10 hover:border-neon-green/30 transition-all duration-300">
                  <div className="flex items-center gap-8">
                    {/* Expert Image */}
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-neon-green/30">
                        <img
                          src={experts[currentIndex].image}
                          alt={experts[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Quote and Info */}
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-4">
                        <Quote className="w-6 h-6 text-neon-green" />
                        <div>
                          <div className="text-xl font-bold text-neon-green">{experts[currentIndex].name}</div>
                          <div className="text-sm text-gray-400">{experts[currentIndex].role}</div>
                        </div>
                      </div>
                      <p className="text-2xl font-medium leading-tight tracking-tight">
                        {experts[currentIndex].quote}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-dark-bg border border-neon-green/30 flex items-center justify-center hover:bg-neon-green/10 transition-colors z-20"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft className="w-6 h-6 text-neon-green" />
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-dark-bg border border-neon-green/30 flex items-center justify-center hover:bg-neon-green/10 transition-colors z-20"
            onClick={() => paginate(1)}
          >
            <ChevronRight className="w-6 h-6 text-neon-green" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
            {experts.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-neon-green' : 'bg-neon-green/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}