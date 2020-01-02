import React from 'react';

const BadgeForm = ({ handleChange, handleSubmit, people, error }) => {

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        onChange={handleChange}
                        value={people.firstName}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        onChange={handleChange}
                        value={people.lastName}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={handleChange}
                        value={people.email}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Job Title</label>
                    <input
                        type="text"
                        className="form-control"
                        name="jobTitle"
                        onChange={handleChange}
                        value={people.jobTitle}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Twitter</label>
                    <input
                        type="text"
                        className="form-control"
                        name="twitter"
                        onChange={handleChange}
                        value={people.twitter}
                    />
                </div>
                <button className="btn btn-primary">
                    Save
                </button>

                {
                    error && (
                        <div className="alert alert-danger my-2" role="alert">
                            { error.message }
                        </div>
                    )
                }
            </form>
        </div>
    );

};

export default BadgeForm;