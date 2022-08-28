import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';


const BASE_URL = `http://localhost:5000`;


class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      offset:0,
      limit:10
    }
  }

  callAPI = async () =>{
    try{
      const results = await axios.get(BASE_URL+'/fetchBuildList', {offset: this.state.offset,limit: this.state.limit});
      console.log(results)
      if(results.data && results.data.status === "OK"){
        // this.props.userLoggedIn(results.data.data)
        // this.props.history.push("/home")
      }
    }catch(e) {
      console.log(e)
    }
  }

  async componentDidMount (){
    this.callAPI();
  }


  render() {

    return (
      <div className='home-page'>
        <table>
          <tr><th>Build ID</th></tr>
          <th>App ID</th>
          <th>Tag Name</th>
          <th>Tag Type</th>
          <th>Emp Branch</th>
          <th>Dep Env</th>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }

}

export default withRouter(connect(mapStateToProps, {

})(HomePage))
