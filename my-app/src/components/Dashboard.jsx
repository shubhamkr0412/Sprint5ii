import { useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addJob } from "../store/jobs/actions";
import { Navbar } from "./Navbar";
import { v4 as uuidv4 } from "uuid";

export const Dashboard = () => {
  const jobData = useRef({
    id: uuidv4(),
    company: "",
    title: "",
    salary: "",
    description: "",
    location: "",
    type: "",
  });

  const dispatch = useDispatch();

  const { isAdmin } = useSelector((state) => ({
    isAdmin: state.authReducer.isAdmin,
  }));

  const { appliedJobs, whoApplied } = useSelector((state) => ({
    appliedJobs: state.jobReducer.appliedJobs,
    whoApplied: state.jobReducer.whoApplied,
  }));

  console.log("applied", appliedJobs);

  console.log("isAdmin", isAdmin);

  return !isAdmin ? (
    <div>
      <Navbar></Navbar>
      <h1>Applied Jobs</h1>
      <div className="mainJobDiv">
        {appliedJobs.map((e) => (
          <div key={e.id} className="jobDiv">
            <h4>Company Name : {e.company}</h4>
            <p>Job Title: {e.title}</p>
            <p>Salary : {e.salary}</p>
            <p>Description : {e.description}</p>
            <p>Location : {e.location}</p>
            <p>Work-Type : {e.type}</p>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="inputDiv">
      <Navbar></Navbar>
      <h1>Admin Page ADD JOBS</h1>
      <p className="inputTitle">Company Name : </p>
      <input
        type="text"
        placeholder="Company Name"
        onChange={(e) => (jobData.current.company = e.target.value)}
      ></input>
      <p className="inputTitle">Job Title : </p>
      <input
        type="text"
        placeholder="Job Title"
        onChange={(e) => (jobData.current.title = e.target.value)}
      ></input>
      <p className="inputTitle">Salary Range : </p>
      <input
        type="text"
        placeholder="Salary Range"
        onChange={(e) => (jobData.current.salary = e.target.value)}
      ></input>
      <p className="inputTitle">Job Description : </p>
      <input
        type="text"
        placeholder="Job Description"
        onChange={(e) => (jobData.current.description = e.target.value)}
      ></input>
      <p className="inputTitle">Location : </p>
      <input
        type="text"
        placeholder="Location"
        onChange={(e) => (jobData.current.location = e.target.value)}
      ></input>
      <p className="inputTitle">Job Type : </p>
      <input
        type="text"
        placeholder="Job Type"
        onChange={(e) => (jobData.current.type = e.target.value)}
      ></input>
      <br></br>
      <button
        onClick={() => {
          dispatch(addJob(jobData.current));
          alert("job added");
        }}
      >
        ADD JOB
      </button>

      <h1>APPLIED USER LIST : </h1>
      {whoApplied.map((e, i) => (
        <div key={i}>
          <h3>
            {i + 1}. {e}
          </h3>
        </div>
      ))}
    </div>
  );
};
