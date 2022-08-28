import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './../../styles.css'
const BASE_URL = `http://localhost:5000`;


class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      offset: 0,
      limit: 10
    }
  }

  callAPI = async () => {
    try {
      const results = await axios.get(BASE_URL + '/fetchBuildList', { offset: this.state.offset, limit: this.state.limit });
      if (results.data && results.data.status === "OK") {
        this.setState({ data: results.data.data });
      }
    } catch (e) {
      console.log(e)
    }
  }

  async componentDidMount() {
    this.callAPI();
  }

  renderTableRecorder = () => {
    const data = this.state.data;
    return data.map(el => {
      return (
        <div className="table-row">
          <div className="table-data">{el.build_id}</div>
          <div className="table-data">{el.app_id}</div>
          <div className="table-data">{el.tag_name}</div>
          <div className="table-data">{el.tag_type}</div>
          <div className="table-data">{el.emb_branch}</div>
          <div className="table-data">{el.deploy_env_id}</div>
          <div className="table-data">{el.deploy_status}</div>
        </div>


      )
    })
  }


  render() {

    return (
      <div className='home-page'>
        {this.state.data.length >= 1 ?
          <div className="table">
            <div className="table-header">
              <div className="header__item">Build ID</div>
              <div className="header__item">App ID</div>
              <div className="header__item">Tag Name</div>
              <div className="header__item">Tag Type</div>
              <div className="header__item">Emp Branch</div>
              <div className="header__item">Dep Env</div>
              <div className="header__item">Dep Status</div>
            </div>

            {this.renderTableRecorder()}
          </div> : null}
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
