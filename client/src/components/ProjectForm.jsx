import React, { useState } from 'react';
import { Link } from "@reach/router"


export default props => {
    const {onSubmitProp, handleChange} = props;

    return (
        <div>
          <Link to={"/project"}>Back to Dashboard</Link>
            <form onSubmit={onSubmitProp}>
                <div>
                    <label>Name</label><br/>
                    <input type="text" name="name" onChange={handleChange}/>
                </div>
                <div>
                  <label>Due Date</label><br/>
                  <input type="date" name="dueDate" onChange={handleChange}/>
                </div>
                <button type="submit" class="btn btn-primary">Plan Project</button>
            </form>
        </div>
    )
}