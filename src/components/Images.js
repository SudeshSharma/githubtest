import React from 'react'
import jobs from './Pics/jobs.jpg'

class Images extends React.Component{
    render(){
        return(
            <div>
                <img src={jobs} alt="steve jobs"/>
            </div>
        )
    }

}

export default Images