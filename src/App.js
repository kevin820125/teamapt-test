import stars from 'assets/stars.png';
import star2 from 'assets/star2.png';
import lights from 'assets/lights.png';
import coins1 from 'assets/coins1.png';
import leftCoin from 'assets/left-coin.png';
import rightCoin from 'assets/right-coin.png';
import Card from 'components/Card';
import Navbar from 'components/Navbar';
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
      delay: 0.5,
      duration: 0.6,
    },
  },
};

const animateCoinVariant = {
  hide: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.8,
    },
  },
};

const animateVariantPara = {
  hide: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.7,
      duration: 0.8,
    },
  },
};

function App() {
  return (
    <div className="w-screen min-h-screen overflow-y-hidden bg-blueBg bg-cover bg-center bg-no-repeat">
      <div className="xl:container xl:mx-auto">
        <Navbar />

        <div className="px-5 lg:px-10 mt-3 text-center md:mt-12">
          <img
            src={stars}
            alt="stars"
            className="hidden -mb-40 mx-auto md:block"
          />
          <motion.h1
            variants={animateVariant}
            initial="hide"
            animate="show"
            className="text-[70px] leading-[63.7px] hidden font-poppins font-bold md:block">
            <span className="font-light">Unlock to</span> <br /> Power your
            dreams!
          </motion.h1>

          {/* ----Mobile version heading---- */}
          <div className="md:hidden">
            <img src={star2} alt="star" className="-mb-5 -mr-5 ml-auto" />
            <motion.h1
              variants={animateVariant}
              initial="hide"
              animate="show"
              className="text-[40px] leading-[40.8px] font-poppins font-bold">
              <span className="font-light">Unlock to</span> Power your dreams!
            </motion.h1>
          </div>

          <motion.p
            variants={animateVariantPara}
            initial="hide"
            animate="show"
            className="hidden mt-10 text-3xl md:block">
            Stand a chance to win <br />{' '}
            <span className="font-bold"><del>N</del>3,000,000</span> everyday for the next
            5 days
          </motion.p>
          <motion.p
            variants={animateVariantPara}
            initial="hide"
            animate="show"
            className="mt-8 md:hidden">
            Stand a chance to win <span className="font-bold"><del>N</del>3,000,000</span>{' '}
            everyday for the next 5 days
          </motion.p>
        </div>

        {/* ----------Card--------- */}
        <Card />

        <motion.div
          variants={animateCoinVariant}
          initial="hide"
          animate="show"
          className="md:mt-5 overflow-hidden relative md:pt-0 z-10"
        >
          <div className="absolute left-[50%] translate-x-[-50%] z-20 mt-8 px-5 lg:px-10">
            <motion.button
              variants={animateVariantPara}
              initial="hide"
              animate="show"
              className="w-[225px] flex items-center justify-center mx-auto py-5 text-sm font-semibold bg-yellowG rounded-md z-10">
              Play The Game{' '}
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-10"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.829505 0.454505C1.26884 0.015165 1.98116 0.015165 2.4205 0.454505L9.1705 7.2045C9.60983 7.64384 9.60983 8.35616 9.1705 8.7955L2.4205 15.5455C1.98116 15.9848 1.26884 15.9848 0.829505 15.5455C0.390165 15.1062 0.390165 14.3938 0.829505 13.9545L6.78401 8L0.829505 2.0455C0.390165 1.60616 0.390165 0.893845 0.829505 0.454505Z"
                  fill="white"
                />
              </svg>
            </motion.button>
          </div>

          <div className="coins mt-24 sm:mt-0">
            <img src={leftCoin} alt="coins" id="leftcoin" className="h-28 md:h-auto absolute left-0 sm:left-40 lg:left-72 bottom-0" />
            <img src={rightCoin} alt="coins" id="rightcoin" className="h-20 md:h-auto absolute right-0 sm:right-40 lg:right-72 bottom-0" />
            <img src={coins1} alt="coins" className="mx-auto" />
          </div>

          <div className="h-[1200px] w-[1200px] absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[800px] md:translate-y-[750px] -z-10">
            <img src={lights} alt="lights" className="lights mx-auto" />
          </div>
        </motion.div>
      </div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
    </div>
  );
}

export default App;
