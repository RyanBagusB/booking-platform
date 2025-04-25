import React, { useEffect, useRef, useState } from "react";
import { Head, Link } from "@inertiajs/react";
import CustomerLayout from "../../layouts/CustomerLayout";
import travelerIcon from "../../assets/icons/traveler.png";
import citiesIcon from "../../assets/icons/cities.png";
import cameraIcon from "../../assets/icons/camera.png";
import tourGuideIcon from "../../assets/icons/tour-guide.png";
import airplaneIcon from "../../assets/icons/airplane.png";
import handsIcon from "../../assets/icons/hands.png";
import medicalTeamIcon from "../../assets/icons/medical-team.png";
import heroImage from "../../assets/images/hero.png";
import bannerImage from "../../assets/images/banner.png";
import testimonialImage from "../../assets/images/testimonial.png";

const FramedImage = ({
  src, alt = 'Image', borderRadius = '6.25rem 1rem 1rem 1rem', offsetTop = 20, offsetLeft = 20, borderColor = '#E5E5E5', className = '', imgClassName = '',
}) => {
  const imgRef = useRef(null);
  const containerRef = useRef(null);
  const [imgHeight, setImgHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (imgRef.current && containerRef.current) {
        setImgHeight(imgRef.current.offsetHeight);
      }
    };

    const observer = new ResizeObserver(updateHeight);
    if (imgRef.current) observer.observe(imgRef.current);

    updateHeight();

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`relative h-[${imgHeight}] ${className}`}>
      <div style={{ top: offsetTop, left: offsetLeft, borderRadius: borderRadius }} className={`absolute w-full h-full border-2 border-[${borderColor}]`} />
      <img style={{ borderRadius }} ref={imgRef} src={src} alt={alt} className={`relative z-10 w-auto h-auto ${imgClassName}`} />
    </div>
  );
};

const StatItem = ({ icon, value, label }) => (
  <div className="flex flex-col space-y-4">
    <img src={icon} alt="Icon" className="w-10 h-10" />
    <p className="text-[#152C5B] font-semibold">
      {value} <span className="text-[#B0B0B0] font-normal">{label}</span>
    </p>
  </div>
);

const HeroSection = () => {
  return (
    <section className="flex px-24 gap-8 py-16 items-center">
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col space-y-6 ">
          <h2 className="text-[#152C5B] text-5xl font-bold">Forget Busy Work, Start Next Vacation</h2>
          <p className="text-base text-[#B0B0B0]">We provide what you need to enjoy your holiday with family. Time to make another memorable moments.</p>
          <Link
            href="#"
            className="w-fit shadow-xl bg-[#FF4000] text-white font-bold border border-[#FF4000] px-8 py-2 rounded-[4px] text-center transition duration-200 hover:bg-white hover:text-[#FF4000]"
          >
            Show Me Now
          </Link>
        </div>
        <div className="grid grid-cols-3 space-y-4 text-base">
          <StatItem icon={travelerIcon} value="80,489" label="travelers" />
          <StatItem icon={citiesIcon} value="1,489" label="cities" />
          <StatItem icon={cameraIcon} value="432" label="treasure" />
        </div>
      </div>
      <FramedImage src={heroImage} alt="Hero Image" borderRadius="6.25rem 1rem 1rem 1rem" offsetTop={16} offsetLeft={16} borderColor="#E5E5E5" />
    </section>
  );
};

const ServiceItem = ({ icon, title, description }) => (
  <div className="flex flex-col space-y-2 text-center items-center">
    <img src={icon} alt={title} className="w-20" />
    <h5 className="text-[#1E1D4C] font-semibold text-xl">{title}</h5>
    <p className="text-[#5E6282] text-base">{description}</p>
  </div>
);

const ServiceSection = () => {
  return (
    <section className="flex flex-col space-y-10 px-24 py-16">
      <div className="text-center flex flex-col space-y-2">
        <h3 className="text-[#DF6951] font-semibold text-lg">CATEGORY</h3>
        <h4 className="text-[#181E4B] font-bold text-5xl capitalize">
          We Offer Best Services
        </h4>
      </div>
      <div className="grid grid-cols-4 gap-6">
        <ServiceItem icon={tourGuideIcon} title="Responsive Admin" description="sunt qui repellat saepe quo velit aperiam id aliquam placeat." />
        <ServiceItem icon={airplaneIcon} title="Best Staycation" description="sunt qui repellat saepe quo velit aperiam id aliquam placeat." />
        <ServiceItem icon={handsIcon} title="Good Price" description="sunt qui repellat saepe quo velit aperiam id aliquam placeat." />
        <ServiceItem icon={medicalTeamIcon} title="Lorem Ipsum" description="sunt qui repellat saepe quo velit aperiam id aliquam placeat." />
      </div>
    </section>
  );
};

const Underline = (props) => {
  return (
    <svg
      width="313"
      height="38"
      viewBox="0 0 313 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`mx-auto ${props.className}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d={`M236.065 9.85704C192.36 6.08905 179.848 5.18085 155.509 4.01086
           C130.287 2.79837 112.203 2.28073 83.4615 1.9486C76.7986 1.87161 69.671 1.72057
           61.3214 1.47929C30.6495 0.592914 24.6666 0.569009 14.6533 1.2921C9.69197 1.65055
           5.41525 1.81687 3.03433 1.74441C0.91753 1.67981 0.52774 1.73056 0.49436 2.07493
           C0.464862 2.37926 3.80297 2.97196 5.65828 2.99169C6.32314 2.99896 8.12303 3.03323
           9.65815 3.06826C11.1933 3.1031 14.5769 3.12526 17.1772 3.11744C23.3005 3.09876
           26.2308 3.18976 36.6996 3.72361C54.2988 4.6211 67.6096 5.13447 83.9808 5.54718
           C90.014 5.6992 98.0247 5.90113 101.782 5.99581C130.281 6.71372 165.027 8.25864
           186.206 9.74977C211.907 11.5589 291.549 18.6756 290.157 19.0384C289.605 19.1823
           280.357 19.7538 274.824 19.9861C269.742 20.1995 261.266 20.3963 250.848 20.5427
           C245.908 20.6124 239.127 20.7141 235.779 20.769C223.203 20.9754 219.063 21.0162
           211.931 21.0048C179.072 20.9522 157.303 21.5718 126.909 23.4244C108.842 24.5254
           93.944 26.3558 77.2086 29.5305C67.6937 31.3355 66.7456 31.728 67.4877 33.5557
           C67.9707 34.7449 72.6252 35.3442 82.1211 35.4394C99.4747 35.6138 115.758 36.0228
           131.508 36.6798C141.386 37.092 142.697 37.1275 152.769 37.2572C156.531 37.3058
           163.026 37.4731 167.202 37.6295L174.795 37.9137L164.778 36.7648C149.599 35.0236
           133.287 33.4588 127.888 33.2261C110.012 32.4556 100.268 32.2516 84.3138 32.3139
           C80.5111 32.3288 77.3071 32.299 77.1936 32.2478C76.0996 31.7526 101.989 28.3813
           114.278 27.4189C142.017 25.2461 170.45 24.3748 214.017 24.3621C217.996 24.361
           225.989 24.2895 231.781 24.2036C237.572 24.1174 246.7 23.9828 252.066 23.9042
           C272.719 23.6018 278.889 23.3415 298.847 21.9311C311.629 21.0276 311.698 21.016
           312.176 19.6533C312.702 18.1552 311.762 17.3611 308.895 16.8823C306.171 16.4272
           254.83 11.4748 236.065 9.85704ZM175.624 37.8378C175.858 37.9075 176.202 37.9391
           176.389 37.908C176.577 37.8769 176.386 37.8197 175.965 37.7811C175.544 37.7425
           175.391 37.7681 175.624 37.8378Z`}
        fill="white"
      />
    </svg>
  );
}

const BannerSection = () => {
  return (
    <section className="relative bg-cover bg-center py-32 px-24" style={{ backgroundImage: `url(${bannerImage})` }}>
      <h3 className="text-white text-5xl max-w-[560px] font-bold relative">
        Let’s make your next holiday{" "}
        <span className="relative">
          <span>amazing</span>
          <span className="absolute left-0 top-full mt-2">
            <Underline />
          </span>
        </span>
      </h3>
    </section>
  );
};

const MostPickedSection = () => {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const containerWidth = entry.contentRect.width;

        let newCardWidth = containerWidth * 0.7;
        if (containerWidth >= 750) {
          newCardWidth = containerWidth / 3.3;
        } else if (containerWidth >= 500) {
          newCardWidth = containerWidth / 2.3;
        }

        setCardWidth(newCardWidth);
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  return (
    <section ref={containerRef} className="flex flex-col space-y-4 px-24 py-10">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl text-[#152C5B] font-semibold">Most Picked</h3>
        <button onClick={scrollRight} className="text-[#152C5B] cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory">
        {[...Array(10)].map((_, index) => (
          <Link
            key={index}
            className="relative rounded-xl overflow-hidden flex-shrink-0 snap-start"
            style={{
              width: `${cardWidth}px`,
              aspectRatio: "3 / 4",
            }}
          >
            <img
              src="https://www.saniharto.com/assets/news/jenis_jenis_hotel_Klasifikasinya.jpg"
              alt="Nama Properti"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 w-full h-full flex flex-col justify-between text-white bg-gradient-to-b from-transparent via-transparent to-black/70">
              <div className="text-base bg-[#FF5820] ml-auto px-6 py-2 rounded-bl-2xl">
                <p><span className="font-semibold">Rp. 1.000.000</span> per night</p>
              </div>
              <div className="flex flex-col p-4">
                <h4 className="text-lg font-bold">Blue Origin Fams</h4>
                <p className="text-base">Bali, Indonesia</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

const StarIcon = ({ className = 'size-6', fill = 'currentColor' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill}
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const TestimonialSection = () => {
  return (
    <section className="flex gap-8 px-24 py-16 items-center">
      <div className="w-1/3">
        <FramedImage src={testimonialImage} alt="Hero Image" borderRadius="1rem 1rem 6.25rem 1rem" offsetTop={-25} offsetLeft={-25} borderColor="#E5E5E5" />
      </div>
      <div className="flex flex-col space-y-4 w-2/3">
        <h4 className="text-[#152C5B] text-2xl font-semibold">Happy Family</h4>
        <div className="flex flex-col space-y-2">
          <div className="flex space-x-2">
            {[...Array(5)].map((_, index) => (
              <StarIcon key={index} className="text-[#EDCD27] size-8" />
            ))}
          </div>
          <p className="text-[#152C5B] text-4xl">What a great trip with my family and i should try again next time soon ...</p>
        </div>
        <p className="text-[#B0B0B0] text-base">Farhan, Full Stack Developer</p>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <>
      <Head title="VillaCation" />
      <HeroSection />
      <ServiceSection />
      <BannerSection />
      <MostPickedSection />
      <TestimonialSection />
    </>
  );
};

Index.layout = (page) => <CustomerLayout children={page} />;

export default Index;
