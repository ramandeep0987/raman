import React from 'react';

function Userlist() {
    return (
        <div className="container-xl">
            <div className="table-responsive">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-5">
                                <h2>
                                    <b> User Listening</b>
                                </h2>
                            </div>
                            <div className="col-sm-7">
                                <a href="/addfrom" className="btn btn-secondary">
                                    <i className="material-icons"></i> <span>Add New User</span>
                                </a>
                                {/* <a href="#" className="btn btn-secondary">
                <i className="material-icons"></i> <span>Export to Excel</span>
              </a> */}
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Date Created</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
              <td>1</td>
              <td>
                <a href="#">
                  <img
                    src="/examples/images/avatar/1.jpg"
                    className="avatar"
                    alt="Avatar"
                  />{" "}
                  Michael Holz
                </a>
              </td>
              <td>04/10/2013</td>
              <td>Admin</td>
              <td>
                <span className="status text-success">•</span> Active
              </td>
              <td>
                <a
                  href="#"
                  className="settings"
                  title="Settings"
                  data-toggle="tooltip"
                >
                  <i className="material-icons"></i>
                </a>
                <a
                  href="#"
                  className="delete"
                  title="Delete"
                  data-toggle="tooltip"
                >
                  <i className="material-icons"></i>
                </a>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <a href="#">
                  <img
                    src="/examples/images/avatar/2.jpg"
                    className="avatar"
                    alt="Avatar"
                  />{" "}
                  Paula Wilson
                </a>
              </td>
              <td>05/08/2014</td>
              <td>Publisher</td>
              <td>
                <span className="status text-success">•</span> Active
              </td>
              <td>
                <a
                  href="#"
                  className="settings"
                  title="Settings"
                  data-toggle="tooltip"
                >
                  <i className="material-icons"></i>
                </a>
                <a
                  href="#"
                  className="delete"
                  title="Delete"
                  data-toggle="tooltip"
                >
                  <i className="material-icons"></i>
                </a>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <a href="#">
                  <img
                    src="/examples/images/avatar/3.jpg"
                    className="avatar"
                    alt="Avatar"
                  />{" "}
                  Antonio Moreno
                </a>
              </td>
              <td>11/05/2015</td>
              <td>Publisher</td>
              <td>
                <span className="status text-danger">•</span> Suspended
              </td>
              <td>
                <a
                  href="#"
                  className="settings"
                  title="Settings"
                  data-toggle="tooltip"
                >
                  <i className="material-icons"></i>
                </a>
                <a
                  href="#"
                  className="delete"
                  title="Delete"
                  data-toggle="tooltip"
                >
                  <i className="material-icons"></i>
                </a>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                <a href="#">
                  <img
                    src="/examples/images/avatar/4.jpg"
                    className="avatar"
                    alt="Avatar"
                  />{" "}
                  Mary Saveley
                </a>
              </td>
              <td>06/09/2016</td>
              <td>Reviewer</td>
              <td>
                <span className="status text-success">•</span> Active
              </td>
              <td>
                <a
                  href="#"
                  className="settings"
                  title="Settings"
                  data-toggle="tooltip"
                >
                  <i className="material-icons"></i>
                </a>
                <a
                  href="#"
                  className="delete"
                  title="Delete"
                  data-toggle="tooltip"
                >
                  <i className="material-icons"></i>
                </a>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                <a href="#">
                  <img
                    src="/examples/images/avatar/5.jpg"
                    className="avatar"
                    alt="Avatar"
                  />{" "}
                  Martin Sommer
                </a>
              </td>
              <td>12/08/2017</td>
              <td>Moderator</td>
              <td>
                <span className="status text-warning">•</span> Inactive
              </td>
              <td>
                <a
                  href="#"
                  className="settings"
                  title="Settings"
                  data-toggle="tooltip"
                >
                  <i className="material-icons"></i>
                </a>
                <a
                  href="#"
                  className="delete"
                  title="Delete"
                  data-toggle="tooltip"
                >
                  <i className="material-icons"></i>
                </a>
              </td>
            </tr>
                        </tbody>
                    </table>
                    <div className="clearfix">
                        <div className="hint-text">
                            Showing <b>5</b> out of <b>25</b> entries
                        </div>
                        <ul className="pagination">
                            <li className="page-item disabled">
                                <a href="#">Previous</a>
                            </li>
                            <li className="page-item">
                                <a href="#" className="page-link">
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a href="#" className="page-link">
                                    2
                                </a>
                            </li>
                            <li className="page-item active">
                                <a href="#" className="page-link">
                                    3
                                </a>
                            </li>
                            <li className="page-item">
                                <a href="#" className="page-link">
                                    4
                                </a>
                            </li>
                            <li className="page-item">
                                <a href="#" className="page-link">
                                    5
                                </a>
                            </li>
                            <li className="page-item">
                                <a href="#" className="page-link">
                                    Next
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Userlist;
