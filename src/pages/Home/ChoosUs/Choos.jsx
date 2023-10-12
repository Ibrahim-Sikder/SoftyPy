import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { FaRegCheckCircle } from "react-icons/fa";
import "./Choos.css";
import { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="choosWrap py-24">
      <SectionTitle title="Technologies " text=""></SectionTitle>
      <Box className='boxWrap' sx={{ bgcolor: "background.paper", }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
        
          className="tabs"
        >
          <Tab label="Programming" {...a11yProps(0)} />
          <Tab label="DATABASE" {...a11yProps(1)} />
          <Tab label="REPORTING" {...a11yProps(2)} />
          <Tab label="PROJECT MANAGEMENT" {...a11yProps(3)} />
          <Tab label="TESTING" {...a11yProps(4)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <div className="technologies">
            <div>
              <h3 className="text-3xl font-bold mb-5">Programming</h3>
              <ul className="category">
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>{" "}
                  <small>
                    C#, Microsoft.net, WinForm, WPF,UWA, ASP.net, Entity
                    Framework, NHibernate,ODBC, ADO.net{" "}
                  </small>
                </li>
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>{" "}
                  <small>
                    Java, Java Swing, JavaFX, JavaEE,REACT Framework, Hibernate,
                    JDBC
                  </small>
                </li>
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>
                  <small> Android SDK</small>
                </li>
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>
                  <small>Swift for iOS</small>
                </li>
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>{" "}
                  <small>Android SDK</small>
                </li>
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>
                  <small>JavaScript, JQuery, AngularJS, Bootstrap,</small>
                </li>
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>
                  <small>Google Maps JS API</small>
                </li>
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>
                  <small>REACT(MERN STACK) </small>
                </li>
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>
                  <small> PHP, Laravel</small>
                </li>
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>
                  <small> Ruby, Ruby on Rails</small>
                </li>
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>
                  <small>
                    Eclipse, Che, NetBeans, Microsoft Visual Studio, Android
                    Studio, XCode
                  </small>
                </li>
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>
                  <small>Microsoft Visio, Rational Rose</small>
                </li>
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>
                  <small>Git, SVN, Team Foundation Server</small>
                </li>
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>
                  <small>Maven, Gradle, Nuget</small>
                </li>
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>
                  <small>Microsoft Installer, Installshield</small>
                </li>
              </ul>
            </div>
            <div className="technologyRightSide">
              <lottie-player
                id="firstLottie"
                autoplay
                loop
                mode="normal"
                src="/programming3.json"
                className="animation"
              ></lottie-player>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="technologies">
            <div>
              <h3 className="text-3xl font-bold mb-5">DATABASE</h3>
              <ul className="category">
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>{" "}
                  <small>Microsoft SQL Server</small>
                </li>
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>{" "}
                  <small>Oracle Database Server</small>
                </li>
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>{" "}
                  <small>MySQL</small>
                </li>
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>{" "}
                  <small>PostgreSQL</small>
                </li>
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>{" "}
                  <small>MongoDB</small>
                </li>
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>{" "}
                  <small>Apache Cassandra, Hadoop</small>
                </li>
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>{" "}
                  <small>DynamoDB</small>
                </li>
              </ul>
            </div>
            <div className="technologyRightSide">
              <lottie-player
                id="firstLottie"
                autoplay
                loop
                mode="normal"
                src="/database.json"
                className="animation"
              ></lottie-player>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="technologies">
            <div>
              <h3 className="text-3xl font-bold mb-5">Reporting</h3>
              <ul className="category">
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>{" "}
                  <small>iReport</small>
                </li>
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>{" "}
                  <small>Crystal Report</small>
                </li>
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>{" "}
                  <small>Microsoft Reporting Server</small>
                </li>
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>{" "}
                  <small>Microsoft Client reports</small>
                </li>
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>{" "}
                  <small>HTML5</small>
                </li>
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>{" "}
                  <small>CharJs, Google Chart, Flot</small>
                </li>
              </ul>
            </div>
            <div className="technologyRightSide">
              <lottie-player
                id="firstLottie"
                autoplay
                loop
                mode="normal"
                src="/reporting.json"
                className="animation"
              ></lottie-player>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div className="technologies">
            <div>
              <h3 className="text-3xl font-bold mb-5">Project Management </h3>
              <ul className="category">
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>{" "}
                  <small> Scrum, TDD, CI</small>
                </li>
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>{" "}
                  <small> Microsoft Project Server, Microsoft Project</small>
                </li>
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>{" "}
                  <small> Jira</small>
                </li>
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>{" "}
                  <small> Trello, Redmine</small>
                </li>
              </ul>
            </div>
            <div className="technologyRightSide">
              <lottie-player
                id="firstLottie"
                autoplay
                loop
                mode="normal"
                src="/programming.json"
                className="animation"
              ></lottie-player>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <div className="technologies">
            <div>
              <h3 className="text-3xl font-bold mb-5">Testing</h3>
              <ul className="category">
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>{" "}
                  <small> MSTest</small>
                </li>
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>{" "}
                  <small> NUnit</small>
                </li>
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>{" "}
                  <small> JUnit</small>
                </li>
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>{" "}
                  <small> TestNG</small>
                </li>
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>{" "}
                  <small> Selenium (Java/C#/Python)</small>
                </li>
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>{" "}
                  <small> Apium</small>
                </li>
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>{" "}
                  <small> LoadRunner</small>
                </li>
                <li className="flex items-center">
                  <small className="mr-3">
                    <FaRegCheckCircle className="checkIcon" />
                  </small>{" "}
                  <small> dEVTOOLS</small>
                </li>
              </ul>
            </div>
            <div className="technologyRightSide">
              <lottie-player
                id="firstLottie"
                autoplay
                loop
                mode="normal"
                src="/testing.json"
                className="animation"
              ></lottie-player>
            </div>
          </div>
        </TabPanel>
      </Box>
    </div>
  );
}
