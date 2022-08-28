const Pool = require('pg').Pool
const pool = new Pool({
    host: "localhost",
    user: "myapp",
    port: 5432,
    password: "root",
    database: "myapp"
})

const fetchBuilds = (request, response) => {
    const { offset, limit } = request.query;
    /*pool.query(`SELECT * FROM build_dts ORDER BU build_id OFFSET ${offset} LIMIT ${limit} `, (error, results) => {
        if (error) {
            response.status(400).json({
                status: "FAILED",
                data: results.rows,
                messsage: "No user Found"
            })
            throw error;
        }
        if (results.rows.length === 0) {
            response.status(400).json({
                status: "FAILED",
                data: results.rows,
                messsage: "No Record Found"
            })
        } else {
            response.status(200).json({
                status: "OK",
                data: results.rows,
                messsage: "We have build records"
            })
        }

    })*/
    const data = [
      {build_id:"BRC1_101",app_id:"BRC1",tag_name:"TG_101",tag_type:"Custom",emb_branch:'US123456',deploy_env_id:'DEV',
      deploy_status:'Pending',created_by:'',created_date:'',modified_date:'',modified_by:''}
    ];
    response.status(200).json({
      status: "OK",
      data: data,
      messsage: "We have build records"
  })
}


const login = (request, response) => {
    const { user, password } = request.body;
    pool.query(`SELECT * FROM users WHERE name='${user}' AND password='${password}' `, (error, results) => {
        if (error) {
            response.status(400).json({
                status: "FAILED",
                data: results.rows,
                messsage: "No user Found"
            })
            throw error;
        }
        if (results.rows.length === 0) {
            response.status(200).json({
                status: "FAILED",
                data: results.rows,
                messsage: "No user Found"
            })
        } else {
            response.status(200).json({
                status: "OK",
                data: results.rows,
                messsage: "Logged in Success full"
            })
        }

    })
}

const logOut = (request, response) => {
  response.status(200).json({
    status: "OK",
    data: "",
    messsage: "Log out done"
})
}
module.exports = {
    login,
    logOut,
    fetchBuilds
}