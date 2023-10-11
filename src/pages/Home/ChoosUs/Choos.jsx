import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import "../../Services/Services";
import {FaArrowRight } from "react-icons/fa";
const Choos = () => {
  return (
    <div className="my-24">
      <div className="my-10">
        <SectionTitle title="Why SoftyPy Is The Best Chooice"></SectionTitle>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card">
          <div className="inner-box">
            <div className="card-front card-front5">
              <h3 className="text-white text-4xl font-bold">
                FULL TRANSPARENCY
              </h3>
            </div>
            <div className="card-back text-white">
              <div className="card-back-content px-3">
                <h4 className="text-2xl font-bold ">FULL TRANSPARENCY</h4>
                <p className="my-3">
                  Every penny we spend and day that we work for you is fully
                  accountable, always open for discussion.
                </p>
                <div className="flex items-center justify-center bg-[#F87015] w-32 h-10 mx-auto rounded-full radius">
                  <button>See more </button>
                  <FaArrowRight className="ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="inner-box">
            <div className="card-front card-front1">
              <h3 className="text-white text-4xl font-bold">
                DRIVEN BY RESULTS
              </h3>
            </div>
            <div className="card-back text-white">
              <div className="card-back-content px-3">
                <h4 className="text-2xl font-bold "> DRIVEN BY RESULTS </h4>
                <p className="my-3">
                  We measure everything. No hiding. We let the results speak for
                  themselves.
                </p>
                <div className="flex items-center justify-center bg-[#F87015] w-32 h-10 mx-auto rounded-full radius">
                  <button>See more </button>
                  <FaArrowRight className="ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="inner-box">
            <div className="card-front card-front3">
              <h3 className="text-white text-4xl font-bold">  DEDICATED ACCOUNT MANAGER </h3>
            </div>
            <div className="card-back text-white">
              <div className="card-back-content px-3">
                <h4 className="text-2xl font-bold ">
                DEDICATED ACCOUNT MANAGER
                </h4>
                <p className="my-3">
                  When you work with us, you will be working with seasoned
                  professionals. We will also assign a dedicated account manager
                  for you.
                </p>
                <div className="flex items-center justify-center bg-[#F87015] w-32 h-10 mx-auto rounded-full radius">
                  <button>See more </button>
                  <FaArrowRight className="ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choos;
