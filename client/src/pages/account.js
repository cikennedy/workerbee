import React, { useState, useEffect } from "react";

function account() {
    return (
     
        <section id="contact" className="contact">
            <div className="container" >
                <div className="section-title">
                    <h2>Your Account Information</h2>
                </div>

                <div className="row mt-1">

                <div className="col-lg-4">
                        <div className="info">
                            <div className="address">
                                <h4>User Name:</h4>
                                <input type="text" name="name" className="form-control" id="name" placeholder="User Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validate"></div>
                            </div>

                            <div className="email">
                                <h4>Password</h4>
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Password" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                <div className="validate"></div>
                            </div>

                            <div className="phone">
                                <h4>Update Password</h4>
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="New Password" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                <div className="validate"></div>
                                <div className="text-center"><button type="submit">Submit</button></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="info">
                            <div className="address">
                                <i className="icofont-google-map"></i>
                                <h4>Your Address:</h4>
                                <p>127 N. Walnut St., Itasca, IL 60143 - USA</p>
                            </div>

                            <div className="email">
                                <i className="icofont-envelope"></i>
                                <h4>Email:</h4>
                                <p><a href="mailto:tschmidt@eceglobal.com">tschmidt@eceglobal.com</a></p>
                            </div>

                            <div className="phone">
                                <i className="icofont-phone"></i>
                                <h4>Phone:</h4>
                                <p><a href="tel:+17735517786"></a>+1 773-551-7786</p>
                            </div>
                        </div>
                    </div>
                </div> 
        </div>
      </section>
);
}

  export default account;