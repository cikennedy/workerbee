import React from 'react';

export default function AllJobs(props) {
    // console.log(props.jobs);
    const displayJobs = (props) => {
        const {jobs} = props;

        if (jobs.length > 0) {
            return(
                jobs.map((job) => {
                    console.log(job);
                    return(
                        <div className='job' key={job._id}>
                            <h3 className="job_name">{job.job_title}</h3>
                            <p className="job_category">{job.category}</p>
                            <p className="job_description">{job.description}</p>
                            <p className="job_address">{job.address}</p>
                            <p className="job_phone">{job.phone}</p>
                            <p className="job_email">{job.email}</p>
                            <p className="job_duration">{job.duration}</p>
                            <p className="job_pay">{job.pay}</p>
                        </div>
                    )
                })
            )
        }
        else {
            return (<h3>No Jobs Posted</h3>)
        }
    }
    return(
        <>
            {displayJobs(props)}
        </>
    )
}