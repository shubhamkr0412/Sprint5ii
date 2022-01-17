import { useSelector } from "react-redux";
import { Navbar } from "./Navbar";
import "./Homepage.css";
import { useDispatch } from "react-redux";
import { applyJob, whoApplied } from "../store/jobs/actions";

export const Homepage = () => {
  const { jobs } = useSelector((state) => ({
    jobs: state.jobReducer.jobs,
  }));

  const dispatch = useDispatch();

  return (
    <div>
      <Navbar></Navbar>
      <h1>Homepage</h1>

      <div className="mainJobDiv">
        {jobs.map((e) => (
          <div key={e.id} className="jobDiv">
            <h4>Company Name : {e.company}</h4>
            <p>Job Title: {e.title}</p>
            <p>Salary : {e.salary}</p>
            <p>Description : {e.description}</p>
            <p>Location : {e.location}</p>
            <p>Work-Type : {e.type}</p>
            <button
              className="applyJobButton"
              onClick={() => {
                dispatch(applyJob(e));
                dispatch(
                  whoApplied(
                    `user_saurabh@gmail.com applied ${e.company} for ${e.title} position.`
                  )
                );
              }}
            >
              Apply for Job
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
