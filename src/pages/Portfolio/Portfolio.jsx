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
            <div className="portfolio">
              <Link >
                <div className="singlePortfolio portfolio1">
                  <div className="bg-[#951FE8] text-white absolute w-full right-0 bottom-0  ">
                    <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                  </div>
                </div>
              </Link>
              <Link >
                <div className="singlePortfolio portfolio2">
                  <div className="bg-[#951FE8] text-white absolute w-full right-0 bottom-0  ">
                    <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                  </div>
                </div>
              </Link>
              <Link >
                <div className="singlePortfolio portfolio3">
                  <div className="bg-[#951FE8] text-white absolute w-full right-0 bottom-0  ">
                    <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                  </div>
                </div>
              </Link>
              <Link to="https://www.ghuronti.com/hotel">
                <div className="singlePortfolio portfolio4">
                  <div className="bg-[#951FE8] text-white absolute w-full right-0 bottom-0  ">
                    <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                  </div>
                </div>
              </Link>
              <Link to="https://www.ghuronti.com/hotel">
                <div className="singlePortfolio portfolio4">
                  <div className="bg-[#951FE8] text-white absolute w-full right-0 bottom-0  ">
                    <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                  </div>
                </div>
              </Link>
              <Link to="https://www.ghuronti.com/hotel">
                <div className="singlePortfolio portfolio5">
                  <div className="bg-[#951FE8] text-white absolute w-full right-0 bottom-0  ">
                    <h2 className="text-xl">Ghuronti Travels Ltd</h2>
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
            </div>
          </TabPanel>
          <TabPanel>
          <div className="portfolio">
              <Link >
                <div className="singlePortfolio portfolio3">
                  <div className="bg-[#951FE8] text-white absolute w-full right-0 bottom-0  ">
                    <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                  </div>
                </div>
              </Link>
              <Link to="https://www.ghuronti.com/hotel">
                <div className="singlePortfolio portfolio4">
                  <div className="bg-[#951FE8] text-white absolute w-full right-0 bottom-0  ">
                    <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                  </div>
                </div>
              </Link>
              <Link to="https://www.ghuronti.com/hotel">
                <div className="singlePortfolio portfolio4">
                  <div className="bg-[#951FE8] text-white absolute w-full right-0 bottom-0  ">
                    <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                  </div>
                </div>
              
              </Link>
            </div>
          </TabPanel>
          <TabPanel>
          <div className="portfolio">
              
              <Link to="https://www.ghuronti.com/hotel">
                <div className="singlePortfolio portfolio4">
                  <div className="bg-[#951FE8] text-white absolute w-full right-0 bottom-0  ">
                    <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                  </div>
                </div>
              
              </Link>
            </div>
          </TabPanel>
          <TabPanel>
            <h3>Tab items 4</h3>
          </TabPanel>
          <TabPanel>
            <h3>Tab items 5</h3>
          </TabPanel>
          <TabPanel>
            <h3>Tab items 6</h3>
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
