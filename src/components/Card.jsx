import bulb from 'assets/bulb.png';
import star1 from 'assets/star1.png';
import star3 from 'assets/star3.png';
import { motion } from 'framer-motion';

const animateVariant = {
  hide: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 0.4,
    },
  },
};

const Card = () => {
  return (
    <motion.div
      variants={animateVariant}
      initial="hide"
      animate="show"
      className="flex justify-center mt-8 md:mt-10 px-5 lg:px-10">
      <div className="sm:w-[445px] p-5 bg-cardBg rounded-lg shadow-cardBox md:p-8">
        <img src={star3} alt="stars" className="-ml-10 md:hidden" />
        <img src={star1} alt="stars" className="-mt-14 ml-auto md:hidden" />

        <h1 className="mt-6 text-center font-bold md:mt-0">🚀 How To Play</h1>
        <div className="mt-6">
          <p className="text-sm">1. Guess the right combination of numbers</p>
          <p className="mt-1 text-sm">
            2. Win <span className="font-bold"><del>N</del>3,000,000</span> instantly
          </p>
        </div>
        <p className="mt-3 text-sm">
          Sounds unbelievable? Well, guess right & see for yourself!
        </p>
        <div className="flex items-start mt-5 px-2 py-3 bg-blackG rounded-lg space-x-1">
          <img src={bulb} alt="bulb" />
          <p className="text-xs">
            Think well before you guess. You have only{' '}
            <span className="font-bold">2</span> attempts per day and even after
            you wi, you can come back the next day to try for another jackpot!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
