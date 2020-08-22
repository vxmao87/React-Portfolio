import React from "react";
import "./style.css";

function ContactCard() {
    return (
        <div className="contact-card">
            <div className = "container">
                <div className = "row">
                    <div className = "col-md-8">
                        <div className="page-header">
                            <h1 className="contact-header">Contact</h1>
                        </div>
                        <form>
                            <div className="form-group">
                                <label for="exampleName">Name</label>
                                <input type="name" className="form-control" id="exampleName2" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label for="exampleMail">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label for="exampleMessage">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn-sm btn-outline-secondary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactCard;