import React from 'react'
import jobs from './Pics/jobs.jpg'
import job2 from './Pics/job2.jpg'
import job3 from './Pics/job3.jpg'

class Images extends React.Component{
    render(){
        return(
            <div>
                <img src={jobs} alt="steve jobs"/><br/><br/>
                <img src={job2} alt="steve jobs"/><br/><br/>
                <img src={job3} alt="steve jobs"/><br/><br/>
            </div>
        )
    }

}

export default Images