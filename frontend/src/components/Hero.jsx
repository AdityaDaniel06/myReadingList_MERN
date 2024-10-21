import "./Hero.css";
const Hero = () => {
  return (
    <>
      <div className="heroSection">
        <div className="headingPrimary">
          <span className="headingPrimaryMain">My Reading List</span>
          <span className="headingPrimarySub">Record what you Read</span>
          <button className="mybtn mybtn-white mt-4 px-4 py-3">
            Shop more book...
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
