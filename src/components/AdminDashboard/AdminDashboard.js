import React from 'react'
import AdminNavbar from "../AdminNavbar/AdminNavbar";

export default function AdminDashboard() {
    return (
        <>
            <AdminNavbar />
            <div class="center" style={{ width: "90%", marginTop: "14%" }}>
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xs-3">
                                        <i class="fa fa-solid fa-users fa-4x"></i>
                                        {/* <i class="fa fa-file-text fa-4x"></i> */}
                                    </div>
                                    <div class="col-xs-9 text-right">
                                        <div class='huge'>12</div>
                                        <div class="under-number">Posts</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="panel panel-green">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xs-3">
                                        <i class="fa fa-solid fa-bars fa-4x"></i>
                                        {/* <i class="fa fa-comments fa-4x"></i> */}
                                    </div>
                                    <div class="col-xs-9 text-right">
                                        <div class='huge'>23</div>
                                        <div class="under-number">Comments</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="panel panel-yellow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xs-3">
                                        {/* <i class="fa fa-solid fa-fork-knife fa-4x"></i> */}
                                        <i class="fa fa-solid fa-burger-glass"></i>
                                        {/* <i class="fa fa-user fa-4x"></i> */}
                                    </div>
                                    <div class="col-xs-9 text-right">
                                        <div class='huge'>23</div>
                                        <div class="under-number"> Users</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="panel panel-red">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xs-3">
                                        <i class="fa fa-list fa-4x"></i>
                                    </div>
                                    <div class="col-xs-9 text-right">
                                        <div class='huge'>13</div>
                                        <div class="under-number">Categories</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
