import React, { Fragment } from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import { red } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import '../Post.css';

const tasks = [];
// const useStyles = makeStyles(theme => ({
//   margin: {
//     margin: theme.spacing(1),
//   },
//   extendedIcon: {
//     marginRight: theme.spacing(1),
//   },
// }));
class Comments extends React.Component {
  state = {
    tasks,
    newTask: '',
    editTask: '',
    edition: true
  };
  handleChange = e => {
    this.setState({
      newTask: e.target.value
    });
  };
  handleEdit = e => {
    this.setState({
      editTask: e.target.value
    });
  };
  handleClick = content => {
    if (this.state.tasks)
      this.setState({
        tasks: [
          ...this.state.tasks,
          { content, completed: false, edit: false }
        ],
        newTask: ''
      });
  };
  deleteTask = i => {
    this.setState({
      tasks: this.state.tasks.filter((el, index) => index !== i)
    });
  };

  editTask = i => {
    this.setState({
      tasks: this.state.tasks.map((el, index) => {
        if (index === i) {
          el.edit = !el.edit;
          this.setState({
            editTask: el.content
          });
          el.content = this.state.editTask;
          return el;
        } else return el;
      })
    });
  };
  render() {

    return (
      <Fragment >
        
        <Card className="ombres_multiples_diffuses" >
          <h3 class="bg-primaryt p">Leave A Comment</h3>
     <div className ='commentContainer'>
     <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={ red }>
            R
          </Avatar>
        }
      />
     <TextField
        id="outlined-dense-multiline"
        label="Write comments.."
        className="new-task"
        onChange={this.handleChange}
        value={this.state.newTask}
        margin="dense"
        variant="outlined"
        multiline
        rowsMax="4"
      />
      {/* <span>
      <FloatingActionButtons 
      
      aria-label="add" 
    
      onClick={() => this.handleClick(this.state.newTask)}
          
        />
      </span> */}
      <input
      className="submitComment"
            type="button"
            value="submit"
            className="add-button"
            onClick={() => this.handleClick(this.state.newTask)}
          />
      </div>
     
        
          
        </Card>
        <Card className="comments-section">
        {/* <section className="display-tasks"> */}
          
          
          <ul className="tasks-list">
            {this.state.tasks.map((el, i) =>
              el.edit ? (
                <Fragment key={i}>
                  <input
                    type="text"
                    name='edit'
                    value={this.state.editTask}
                    onChange={this.handleEdit}
                  />
                </Fragment>
              ) : (
                <li key={i} className ='commentx'>
                  
                  <input
                    type="button"
                    value="Delete"
                    className="task-button deletet"
                    onClick={() => this.deleteTask(i)}
                  />
                  <input
                    type="button"
                    value="Edit"
                    className="task-button editet"
                    onClick={() => {
                      this.state.edition && this.editTask(i);
                      this.setState({
                        edition: false
                      });
                    }}
                  />
                  <span className={`task ${el.completed && 'completed-task'}`}>
                    {el.content}
                  </span>
                </li>
              )
            )}
          </ul>
          
        {/* </section> */}

        </Card>
      </Fragment>
    );
  }
}

export default Comments;