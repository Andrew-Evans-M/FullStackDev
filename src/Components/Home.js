import React, { useEffect, useState } from "react";
import "../assets/Css/home.css";
import img1 from "../assets/Images/Google.png";
import img2 from "../assets/Images/FaceBook.png";
import img3 from "../assets/Images/Linkedin.png";
import img4 from "../assets/Images/Twitter.png";
import { Tab, Tabs } from "react-bootstrap";
import { useSelector } from "react-redux";
function Home() {
  const { fetchData } = useSelector((state) => state.countrydata);
  console.log(fetchData, "fetch");

 
  const [isMenuOpen, setMenuOpen] = useState(false);

  const [asian, setAsian] = useState([]);
  console.log(asian, "asian");

  const [europe, setEurope] = useState([]);
  console.log(europe, "europe");

  useEffect(() => {
    asiaCountries();
    europeCountries();
  }, [fetchData]);

  const asiaCountries = () => {
    const filteredCountries = fetchData?.filter(
      (country) => country?.region === "Asia"
    );
    setAsian(filteredCountries);
  };

  const europeCountries = () => {
    const filteredEuropeCountries = fetchData?.filter(
      (country) => country?.region === "Europe"
    );
    setEurope(filteredEuropeCountries);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleListClick = () => {
    setMenuOpen(false);
  };
  return (
    <>
      <div className="container card-main-cont mt-5">
        <div className="card-postn row">
          <div className="svg-cont">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
              onClick={toggleMenu}
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          <div className={`menu ${isMenuOpen ? "test" : ""}`}>
            <ul className="test-contents">
              <li className="test-link">
                <a onClick={() => handleListClick()}>All</a>
              </li>
              <li className="test-link">
                <a onClick={() => handleListClick()}>Asia</a>
              </li>
              <li className="test-link">
                <a onClick={() => handleListClick()}>Europe</a>
              </li>
            </ul>
          </div>
          <div className="local-contry">
                <h3 className="mb-0 country-heading">Countries</h3>
              </div>
          <Tabs
            defaultActiveKey="All"
            id="uncontrolled-tab-example"
            variant="underline"
            className="mb-5 card-tab-main"
          >

            <Tab
              eventKey="All"
              title={
                <span>
                  <i className="fas fa-bars"></i> All
                </span>
              }
            >
              
              <div className="row">
                {fetchData?.map((data, index) => {
                  return (
                    <>
                      {console.log(data, "data")}
                      <div
                        className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                        key={index}
                      >
                        <div className="card-cont">
                          <img
                            src={data?.flag}
                            width="127"
                            height="96"
                            alt="Country Flag"
                          />
                          <h4 className="country-name d-flex flex-column justify-content-center">
                            {data?.name}
                            <span>{data?.region}</span>
                          </h4>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </Tab>
            <Tab eventKey="Asia" title="Asia">
              <div className="row">
                {asian?.map((asia, index) => (
                  <div
                    className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    key={index}
                  >
                    <div className="card-cont">
                      <img
                        src={asia?.flag}
                        width="127"
                        height="96"
                        alt="Country Flag"
                      />
                      <h4 className="country-name d-flex flex-column justify-content-center">
                        {asia?.name}
                        <span>{asia?.region}</span>
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </Tab>
            <Tab eventKey="Europe" title="Europe">
              <div className="row d-flex justify-content-evenly p-2">
                {europe?.map((europian, index) => {
                  return (
                    <>
                      {" "}
                      <div
                        className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                        key={index}
                      >
                        <div className="card-cont">
                          <img
                            src={europian?.flag}
                            width="127"
                            height="96"
                            alt="Country Flag"
                          />
                          <h4 className="country-name d-flex flex-column justify-content-center">
                            {europian?.name}
                            <span>{europian?.region}</span>
                          </h4>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </Tab>
          </Tabs>
        </div>
        <div className="footer">
          <div className="image-cont">
            <img className="me-2" src={img1} />
            <img className="me-2" src={img2} />
            <img className="me-2" src={img3} />
            <img className="me-2" src={img4} />
          </div>
          <div className="copy-rights mt-3">
            <p>Example@email.com</p>
            <p>CopyRights@2020name.All rights reserved</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
