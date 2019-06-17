import React from 'react'
import jobs from './Pics/jobs.jpg'
import job2 from './Pics/job2.jpg'

class Images extends React.Component{
    render(){
        return(
            <div>
                <img src={jobs} alt="steve jobs"/><br/><br/>
                <img src={job2} alt="steve jobs"/>
            </div>
        )
    }

}

export default Images