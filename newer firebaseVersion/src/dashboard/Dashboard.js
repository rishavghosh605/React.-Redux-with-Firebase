import React,{ Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../project/ProjectList'
import {connect} from 'react-redux'//Used to connect the dashboard component with the redux store
class Dashboard extends Component{
    render(){
        //console.log(this.props);
        const { projects } = this.props;
        console.log(projects);
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className='col s12 m6'>
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications/>
                    </div>
                </div>
            </div>
        )
    }
}

//We map the state into the props here using the function below:
const mapStateToProps = (state) =>{
    //In the return statement we decide what props are needed in the component
    return {
        projects: state.project.projects
    }
}
export default connect(mapStateToProps)(Dashboard);