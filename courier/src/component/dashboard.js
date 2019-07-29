import React, {Component} from 'react';
import './dashboard.css';
import ReactTable from "react-table";
import "react-table/react-table.css";
import logo from './logo.svg';

    
export default class Dashboard extends Component{
    
     render(){
         
        const data = [{
            AWB_NUMBER: '#273126375',
            TRANSPORTER: 'DTDC',
            SOURCE: 'Bangalore',
            DESTINATION: 'Delhi',
            BRAND: 'USPA',
            START_DATE: '01/07/2019',
            ETD: '01/07/2019',
            STATUE: 'Delivered'
          },{
            AWB_NUMBER: '#273126375',
            TRANSPORTER: 'DTDC',
            SOURCE: 'Bangalore',
            DESTINATION: 'Delhi',
            BRAND: 'USPA',
            START_DATE: '01/07/2019',
            ETD: '01/07/2019',
            STATUE: 'Delivered'
          },{
            AWB_NUMBER: '#273126375',
            TRANSPORTER: 'DTDC',
            SOURCE: 'Bangalore',
            DESTINATION: 'Delhi',
            BRAND: 'USPA',
            START_DATE: '01/07/2019',
            ETD: '01/07/2019',
            STATUE: 'Delivered'
          },{
            AWB_NUMBER: '#273126375',
            TRANSPORTER: 'DTDC',
            SOURCE: 'Bangalore',
            DESTINATION: 'Delhi',
            BRAND: 'USPA',
            START_DATE: '01/07/2019',
            ETD: '01/07/2019',
            STATUE: 'Delivered'
          },{
            AWB_NUMBER: '#273126375',
            TRANSPORTER: 'DTDC',
            SOURCE: 'Bangalore',
            DESTINATION: 'Delhi',
            BRAND: 'USPA',
            START_DATE: '01/07/2019',
            ETD: '01/07/2019',
            STATUE: 'Delivered'
          },{
            AWB_NUMBER: '#273126375',
            TRANSPORTER: 'DTDC',
            SOURCE: 'Bangalore',
            DESTINATION: 'Delhi',
            BRAND: 'USPA',
            START_DATE: '01/07/2019',
            ETD: '01/07/2019',
            STATUE: 'Delivered'
          }]
      
          const columns = [{
            Header: 'AWB NUMBER',
            accessor: 'AWB_NUMBER'
          },{
            Header: 'TRANSPORTER',
            accessor: 'TRANSPORTER'
          },{
            Header: 'SOURCE',
            accessor: 'SOURCE'
          },{
            Header: 'DESTINATION',
            accessor: 'DESTINATION'
          },{
            Header: 'BRAND',
            accessor: 'BRAND'
          },{
            Header: 'START_DATE',
            accessor: 'START_DATE'
          },{
            Header: 'ETD',
            accessor: 'ETD'
          },{
            Header: 'STATUE',
            accessor: 'STATUE',
            getProps: (state, rowInfo, column) => {
              return {
                  style: {
                      color: 'green',
                  },
              };
          },
          }]
      

         return(
            <div className="container">
              <div>
              <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light" id="topFixedNav">
                <div class="container-fluid index-container-fluid" id="top_nav_bar_user_type">
                    <a class="navbar-brand" id="logoLink" href="/">
                        <img src={logo} alt="Logo" className="logo-height" /> Intugine
                    </a>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <div class="container">
                            <ul class="navbar-nav justify-content-end">
                                    <li class="nav-item user-sign-up mr-3 mt-2 mt_mb3">
                                        Home
                                    </li>
                                    <li class="nav-item user-sign-up mr-3 mt-2 mt_mb3">
                                        Brands
                                    </li>
                                    <li class="nav-item user-sign-up mr-3 mt-2 mt_mb3">
                                        Transporters
                                    </li>
                                    <li class="nav-item user-sign-up mr-3 mt-2 mt_mb3">
                                      <i class="far fa-user-circle fa-2x"></i>
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>
                </nav>

              </div>
              <div className="row justify-content-center page-content-top-margin">
                  <div class="btn btn-sq-lg btn-primary btn-width mr-2">
                      DEL <br/><br/>916
                  </div>
                  <div class="btn btn-sq-lg btn-csmt-color btn-width mr-2">
                      INT <br/><br/>232
                  </div>
                  <div class="btn btn-sq-lg btn-csmt-color btn-width mr-2">
                      OOD <br/><br/>342
                  </div>
                  <div class="btn btn-sq-lg btn-csmt-color btn-width mr-2">
                      DEX <br/><br/>916
                  </div>
                  <div class="btn btn-sq-lg btn-csmt-color btn-width mr-2">
                      NIF <br/><br/>916
                  </div>
              </div>
                <div className="row mt-5">
                    <div className="col-md-3 border mr-2">
                        <div className="row mt-4 p-2 grid-display"><div>Delivery 07-04-2019 </div><div>14:00</div></div>
                        <div className="row mt-4 p-2 grid-display"><div>Out of Delivery 18-07-2019 </div><div>08:00</div></div>
                        <div className="row mt-4 p-2 grid-display"><div>Arrived at Mysore 13-07-2019 </div><div>10:54</div></div>
                        <div className="row mt-4 p-2 grid-display"><div>Arrived at Banglore 11-07-2019 </div>11:20</div>
                        <div className="row mt-4 p-2 grid-display"><div>Transit to Next Hub 04-07-2019 </div>11:45</div>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                        <ReactTable
                            data={data}
                            columns={columns}
                            defaultPageSize = {8}
                            // pageSizeOptions = {[3, 6]}
                        />
                        </div>
                    </div>
                </div>
            </div>
         );
     }
     
}
