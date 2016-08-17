import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {
 constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);

/*
    this.state = {
      course: { title: "" }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
*/
  }

/*
  onTitleChange(event){
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  onClickSave(){
    //alert(`Saving ${this.state.course.title}`);
    
    //first way to handle mapDispatchToProps
    //this.props.dispatch(courseActions.createCourse(this.state.course));
    
    //second way to handle mapDispatchToProps
    //this.props.createCourse(this.state.course);

    //third way to handle mapDispatchToProps
    this.props.actions.createCourse(this.state.course);
  }
*/

  courseRow(course, index){
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  render() {
    //debugger
    const {courses} = this.props;

    return (
      <div>
        <h1>Courses</h1>
        <input type="submit"
               value="Add Course"
               className="btn btn-primary"
               onClick={this.redirectToAddCoursePage}/>
        <CourseList courses={courses}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  // once we started defining the mapDispatchToProps function, connect will no longer add a dispatch property on our component
  // so dispatch is no longer getting injected
  //dispatch: PropTypes.func.isRequired,

  courses: PropTypes.array.isRequired,
  
  //createCourse: PropTypes.func.isRequired
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){ // states comes from index.rootReducer
  //debugger;
  return {
    courses: state.courses // states.courses comes from index.rootReducer.courses
  };
}

function mapDispatchToProps(dispatch){
  return {
    //second way to handle mapDispatchToProps
    // omit parentheses when there is a single parameter
    //createCourse: course => dispatch(courseActions.createCourse(course))

    //third way to handle mapDispatchToProps
    //bindActionCreators will go through courseActions and find ALL THE ATIONS in that file
    //and then wrap them in a call to dispatch
    actions: bindActionCreators(courseActions, dispatch)
  };
}

//first way to handle mapDispatchToProps
//export default connect(mapStateToProps)(CoursesPage);

//second way to handle mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

//third way to handle mapDispatchToProps
