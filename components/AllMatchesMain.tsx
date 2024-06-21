'use client'
import React from 'react'
import Dropdown from '../components/Dropdown';

const Home: React.FC = () => {
    return (
      <div>
        <h1>Dropdown Example</h1>
        <Dropdown label="Select Filter" options={['abc', 'def', 'ghi']} inputId="filter-input" />
        <Dropdown label="Platforms" options={['abc', 'def', 'ghi']} inputId="platforms-input" />
      </div>
    );
  };
  

  const AllMatchesMain: React.FC = () => {
    return (
      <div className="card-nfy" style={{ backgroundColor: 'white', margin: 30, padding: 20 }}>
        <h4><span>Results from all loops</span></h4>
        <div className="card-99d card-o9s v-ghe theme--2pi whi-r4y">
          <div className="mb-eoo">
            <div data-v-100cea66="">
              <div data-v-100cea66="">
                <div data-v-6ca22560="" data-v-100cea66="" className="filter-o1n">
                  <Dropdown label="Select Filter" options={['abc', 'def', 'ghi']} inputId="filter-input" />
                  <Dropdown label="Platforms" options={['abc', 'def', 'ghi']} inputId="platforms-input" />
                  {/* <div data-v-6ca22560="" className="input-o6t filter-e4z input-s7t input-5ll theme--2pi field-jjw field-oer field-kq7">
                    <div className="input-1of">
                      <div className="input-ywv">
                        <fieldset>
                          <legend className="style-mWNgC" id="style-mWNgC"><span> </span></legend>
                        </fieldset>
                        <div className="field-a2x"><label className="label-k22 theme--2pi style-zcdjA" id="style-zcdjA">Filter Companies</label><input id="inp-8ln" type="text" /></div>
                      </div>
                    </div>
                  </div> */}
                  <div data-v-6ca22560="">
                    <div data-v-6ca22560="" className="icon-ok5 icon-gae">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="snipcss0-12-78-79">
                        <g>
                          <path id="Vector" d="M14.0001 26.3334C17.271 26.3334 20.4081 25.034 22.721 22.721C25.034 20.4081 26.3334 17.2711 26.3334 14.0001C26.3334 10.7291 25.034 7.59205 22.721 5.27911C20.4081 2.96617 17.271 1.66677 14.0001 1.66677C10.7291 1.66677 7.59203 2.96617 5.27909 5.27911C2.96615 7.59205 1.66675 10.7291 1.66675 14.0001C1.66675 17.2711 2.96615 20.4081 5.27909 22.721C7.59203 25.034 10.7291 26.3334 14.0001 26.3334Z" stroke="#192334" stroke-opacity="0.6" stroke-width="1.99999" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path id="Vector_2" d="M12.0774 18.6278L16.7254 13.9998L12.0774 9.37183" stroke="#192334" stroke-opacity="0.6" stroke-width="1.99999" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div data-v-100cea66="" className="filter-yj6"></div>
                <div data-v-100cea66="">
                  <div className="alert-ven mx-ojc v-ghe theme--2pi alert-hhy alert-652">
                    <div className="wrapper-3bl">
                      <div className="content-bhn">
                        <button type="button" className="btn-rjg theme--2pi fa-soy text-it9">
                          <span className="content-gn2">Get jobs according to your resume</span>
                        </button>
                      </div>
                      <button type="button" className="btn-rjg btn-q6y theme--2pi fa-soy">
                        <span className="content-gn2"></span>
                      </button>
                    </div>
                  </div>
                </div>
                <div data-v-100cea66="" className="table-vid theme--2pi">
                  <div className="wrapper-hbr">
                    <table>
                      <colgroup>
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                      </colgroup>
                      <thead>
                        <tr>
                          <th className="text-pry"><span>Job Title</span></th>
                          <th className="text-pry"><span>Company</span></th>
                          <th className="text-pry"><span>Location</span></th>
                          <th className="text-pry"><span>Status</span></th>
                          <th className="text-pry"><span>Platform</span></th>
                          <th className="text-pry style-vb37k" id="style-vb37k"><span>Matched At</span></th>
                          <th className="text-pry style-qpj5e" id="style-qpj5e"><span>Actions</span></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="wrapper-1j1">
                          <td>No data available</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="footer-t4c">
                    <div className="footer-ivo">Rows per page:
                      <div className="input-o6t input-s7t theme--2pi field-jjw select-x45">
                        <div className="input-1of">
                          <div className="input-ywv">
                            <div className="select-yex">
                              <div className="select-m4v">
                                <div className="select-ycy select-ox6">10</div>
                                <input id="inp-qcp" type="text" />
                              </div>
                              <div className="input-dwd">
                                <div className="input-3w4">
                                  <span className="icon-hoz theme--2pi">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" className="v-icon__svg snipcss0-19-131-132">
                                      <path d="M7,10L12,15L17,10H7Z"></path>
                                    </svg>
                                  </span>
                                </div>
                                <input type="hidden" value="10" />
                              </div>
                            </div>
                            <div className="menu-qo7"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pagination-aiv">–</div>
                    <div className="footer-ofl">
                      <button type="button" className="btn-rjg btn-q6y icon-iac btn-l5d theme--2pi fa-soy">
                        <span className="content-gn2">
                          <span className="icon-hoz theme--2pi">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" className="v-icon__svg snipcss0-15-139-140">
                              <path d="M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z"></path>
                            </svg>
                          </span>
                        </span>
                      </button>
                      <button type="button" className="btn-rjg btn-q6y icon-iac btn-l5d theme--2pi fa-soy">
                        <span className="content-gn2">
                          <span className="icon-hoz theme--2pi">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" className="v-icon__svg snipcss0-15-143-144">
                              <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
                            </svg>
                          </span>
                        </span>
                      </button>
                    </div>
                    <div className="footer-wbv">
                      <button type="button" className="btn-rjg btn-q6y icon-iac btn-l5d theme--2pi fa-soy">
                        <span className="content-gn2">
                          <span className="icon-hoz theme--2pi">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" className="v-icon__svg snipcss0-15-148-149">
                              <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
                            </svg>
                          </span>
                        </span>
                      </button>
                      <button type="button" className="btn-rjg btn-q6y icon-iac btn-l5d theme--2pi fa-soy">
                        <span className="content-gn2">
                          <span className="icon-hoz theme--2pi">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" className="v-icon__svg snipcss0-15-152-153">
                              <path d="M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z"></path>
                            </svg>
                          </span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div data-v-100cea66="" className="container-b4d"></div>
                <div data-v-100cea66="" className="container-b4d"></div>
                <div data-v-100cea66="" className="container-b4d"></div>
                <div data-v-100cea66="" className="container-b4d"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AllMatchesMain;