import React from "react";
import * as classes from "./Details.css";
import './Details.css';


const Details = props => {
  let school = null
  if (props.loadedSchool) {
    const sampleDate = new Date(props.loadedSchool.sample_date);
    const sampleYear = sampleDate.getFullYear();
    const sampleMonth = sampleDate.getMonth() + 1;
    const sampleDay = sampleDate.getDate();

     school = (
        <div className={classes.cardDetail}>
          <div id='detailInset' className="card">
          <button
                  onClick={(e) => props.closeDetails(e)}
                  id="closeBtn"
                  className=" btn-floating btn waves-effect waves-dark white">
                  <i id="close" className="material-icons">
                    close
                  </i>
                </button>
              <h4>{props.loadedSchool.school_name}</h4>
              <p>School district: {props.loadedSchool.district}</p>
              <p>Exceedance: {props.loadedSchool.action_level_exceedance}</p>
              <p>Lead concentration: {props.loadedSchool.result} ppb</p>
              <p>Sampled from: {props.loadedSchool.school_site_name}</p>
              <p>
                Date sampled: {sampleMonth}/{sampleDay}/{sampleYear}
              </p>
              <p>Water system: {props.loadedSchool.water_system_name}</p>
          </div>
        </div>
    );
  }
  return school;
};

export default Details;
