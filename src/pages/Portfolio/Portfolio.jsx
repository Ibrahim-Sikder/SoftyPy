import { useState } from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import "./Portfolio.css";
import { TabList, TabPanel, Tabs, Tab } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";
const Portfolio = () => {
  const [checked, setChecked] = useState([1]);
  const [tabIndex, setTabIndex] = useState(0);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  return (
    <div className="portfolioWrap">
      <SectionTitle title="Working Portfolio"></SectionTitle>
      <div className="mt-16 mb-24">
        <Tabs
          className="tabWrap"
          defaultTabIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <TabList>
            <Tab>All </Tab>
            <Tab>E-Commerce</Tab>
            <Tab>Travel Agency </Tab>
            <Tab>News Portal </Tab>
            <Tab>Corporate </Tab>
            <Tab>Real Estate </Tab>
            <Tab>Construction </Tab>
          </TabList>
          <TabPanel>
            <div className="portfolio grid grid-cols-1 lg:grid-cols-3 place-items-center">
              <Link >
                <div className="singlePortfolio portfolio1">
                  <div className="bg-[#951FE8] text-white absolute w-full right-0 bottom-0  ">
                    <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                  </div>
                </div>
              </Link>
              <Link to='https://nextstair.com/'>
                <div className="singlePortfolio portfolio2">
                  <div className="bg-[#951FE8] text-white absolute w-full right-0 bottom-0  ">
                    <h2 className="text-xl">NextStair</h2>
                  </div>
                </div>
              </Link>
              <Link to='https://arkaxis.net/'>
                <div className="singlePortfolio portfolio3">
                  <div className="bg-[#951FE8] text-white absolute w-full right-0 bottom-0  ">
                    <h2 className="text-xl">Arkaxis Ltd</h2>
                  </div>
                </div>
              </Link>
              <Link to="https://airtrips.net/">
                <div className="singlePortfolio portfolio4">
                  <div className="bg-[#951FE8] text-white absolute w-full right-0 bottom-0  ">
                    <h2 className="text-xl">Airtrips </h2>
                  </div>
                </div>
              </Link>
              <Link to="https://www.ghuronti.com/hotel">
                <div className="singlePortfolio portfolio5">
                  <div className="bg-[#951FE8] text-white absolute w-full right-0 bottom-0  ">
                    <h2 className="text-xl">Animate</h2>
                  </div>
                </div>
              </Link>
              <Link to="https://www.ghuronti.com/hotel">
                <div className="singlePortfolio portfolio6">
                  <div className="bg-[#951FE8] text-white absolute w-full right-0 bottom-0  ">
                    <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                  </div>
                </div>
              </Link>
              <Link to="https://www.ghuronti.com/hotel">
                <div className="singlePortfolio portfolio7">
                  <div className="bg-[#951FE8] text-white absolute w-full right-0 bottom-0  ">
                    <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                  </div>
                </div>
              </Link>
              <Link to="https://www.ghuronti.com/bus/search">
                <div className="singlePortfolio portfolio8">
                  <div className="bg-[#951FE8] text-white absolute w-full right-0 bottom-0  ">
                    <h2 className="text-xl">Bus Ticket Booking </h2>
                  </div>
                </div>
              </Link>
              <Link to="https://www.ghuronti.com/flight/flightSearch">
                <div className="singlePortfolio portfolio9">
                  <div className="bg-[#951FE8] text-white absolute w-full right-0 bottom-0  ">
                    <h2 className="text-xl">Flight Bookng</h2>
                  </div>
                </div>
              </Link>
              <Link to="https://www.ghuronti.com/hajj/search">
                <div className="singlePortfolio portfolio10">
                  <div className="bg-[#951FE8] text-white absolute w-full right-0 bottom-0  ">
                    <h2 className="text-xl">Hajj & Umrah Package </h2>
                  </div>
                </div>
              </Link>
              <Link to="https://havenly-de0a6.web.app/">
                <div className="singlePortfolio portfolio11">
                  <div className="bg-[#951FE8] text-white absolute w-full right-0 bottom-0  ">
                    <h2 className="text-xl">House Rent </h2>
                  </div>
                </div>
              </Link>
              <Link to="https://monumental-cheesecake-9a7972.netlify.app/">
                <div className="singlePortfolio portfolio12">
                  <div className="bg-[#951FE8] text-white absolute w-full right-0 bottom-0  ">
                    <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                  </div>
                </div>
              </Link>
              <Link to="https://www.ghuronti.com/hotel">
                <div className="singlePortfolio portfolio13">
                  <div className="bg-[#951FE8] text-white absolute w-full right-0 bottom-0  ">
                    <h2 className="text-xl">Digital Agency </h2>
                  </div>
                </div>
              </Link>
              <Link to="https://subtle-selkie-38000f.netlify.app/">
                <div className="singlePortfolio portfolio14">
                  <div className="bg-[#951FE8] text-white absolute w-full right-0 bottom-0  ">
                    <h2 className="text-xl">Landing Page </h2>
                  </div>
                </div>
              </Link>
            </div>
          </TabPanel>
          <TabPanel>
          <div className="portfolio grid grid-cols-1 lg:grid-cols-3 place-items-center">
          <Link to='https://www.crateandbarrel.com/'>
                <div className="singlePortfolio portfolio16">
                  <div className="bg-[#951FE8] text-white absolute w-full right-0 bottom-0  ">
                    <h2 className="text-xl">Crateandbarrel</h2>
                  </div>
                </div>
              </Link>
          <Link to='https://nextstair.com/'>
                <div className="singlePortfolio portfolio17">
                  <div className="bg-[#951FE8] text-white absolute w-full right-0 bottom-0  ">
                    <h2 className="text-xl">NextStair</h2>
                  </div>
                </div>
              </Link>
              <Link to='https://www.makearchitects.com/'>
                <div className="singlePortfolio portfolio18">
                  <div className="bg-[#951FE8] text-white absolute w-full right-0 bottom-0  ">
                    <h2 className="text-xl">Make Ltd</h2>
                  </div>
                </div>
              </Link>
              <Link to='https://www.allbirds.com/'>
                <div className="singlePortfolio portfolio15">
                  <div className="bg-[#951FE8] text-white absolute w-full right-0 bottom-0  ">
                    <h2 className="text-xl">Allbirds</h2>
                  </div>
                </div>
              </Link>
            </div>
          </TabPanel>
          <TabPanel>
          <div className="portfolio grid grid-cols-1 lg:grid-cols-3 place-items-center">
              
              <Link to="https://www.ghuronti.com/hotel">
                <div className="singlePortfolio portfolio1">
                  <div className="bg-[#951FE8] text-white absolute w-full right-0 bottom-0  ">
                    <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                  </div>
                </div>
              
              </Link>
              <Link to="https://airtrips.net/">
                <div className="singlePortfolio portfolio4">
                  <div className="bg-[#951FE8] text-white absolute w-full right-0 bottom-0  ">
                    <h2 className="text-xl">Airtrips </h2>
                  </div>
                </div>
              </Link>
              <Link to="https://www.ghuronti.com/flight/flightSearch">
                <div className="singlePortfolio portfolio9">
                  <div className="bg-[#951FE8] text-white absolute w-full right-0 bottom-0  ">
                    <h2 className="text-xl">Flight Bookng</h2>
                  </div>
                </div>
              </Link>
              <Link to="https://www.ghuronti.com/hajj/search">
                <div className="singlePortfolio portfolio10">
                  <div className="bg-[#951FE8] text-white absolute w-full right-0 bottom-0  ">
                    <h2 className="text-xl">Hajj & Umrah Package </h2>
                  </div>
                </div>
              </Link>
              <Link to="https://www.ghuronti.com/bus/search">
                <div className="singlePortfolio portfolio8">
                  <div className="bg-[#951FE8] text-white absolute w-full right-0 bottom-0  ">
                    <h2 className="text-xl">Bus Ticket Booking </h2>
                  </div>
                </div>
              </Link>
            </div>
          </TabPanel>
          <TabPanel>
         <div className="portfolio grid grid-cols-1 lg:grid-cols-3 place-items-center">
         <Link to='https://nextstair.com/'>
                <div className="singlePortfolio portfolio2">
                  <div className="bg-[#951FE8] text-white absolute w-full right-0 bottom-0  ">
                    <h2 className="text-xl">NextStair</h2>
                  </div>
                </div>
              </Link>
              <Link to='https://arkaxis.net/'>
                <div className="singlePortfolio portfolio3">
                  <div className="bg-[#951FE8] text-white absolute w-full right-0 bottom-0  ">
                    <h2 className="text-xl">Arkaxis Ltd</h2>
                  </div>
                </div>
              </Link>
         </div>

          </TabPanel>
          <TabPanel>
          <div className="portfolio grid grid-cols-1 lg:grid-cols-3 place-items-center">
         <Link to='https://nextstair.com/'>
                <div className="singlePortfolio portfolio2">
                  <div className="bg-[#951FE8] text-white absolute w-full right-0 bottom-0  ">
                    <h2 className="text-xl">NextStair</h2>
                  </div>
                </div>
              </Link>
              <Link to='https://arkaxis.net/'>
                <div className="singlePortfolio portfolio3">
                  <div className="bg-[#951FE8] text-white absolute w-full right-0 bottom-0  ">
                    <h2 className="text-xl">Arkaxis Ltd</h2>
                  </div>
                </div>
              </Link>
         </div>
          </TabPanel>
          <TabPanel>
          <div className="portfolio grid grid-cols-1 lg:grid-cols-3 place-items-center">
         <Link to='https://nextstair.com/'>
                <div className="singlePortfolio portfolio2">
                  <div className="bg-[#951FE8] text-white absolute w-full right-0 bottom-0  ">
                    <h2 className="text-xl">NextStair</h2>
                  </div>
                </div>
              </Link>
              <Link to='https://arkaxis.net/'>
                <div className="singlePortfolio portfolio3">
                  <div className="bg-[#951FE8] text-white absolute w-full right-0 bottom-0  ">
                    <h2 className="text-xl">Arkaxis Ltd</h2>
                  </div>
                </div>
              </Link>
         </div>
          </TabPanel>
          <TabPanel>
            <h3>Tab items 7</h3>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Portfolio;
