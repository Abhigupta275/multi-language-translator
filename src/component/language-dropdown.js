import React from 'react';

const Languageoption = (props) => {
    return (
        <div className="mt-4 text-center">
            <select className="form-select mx-auto" style={{ width: '200px', cursor: "pointer" }} onChange={props.onChange}>
                <option>Select Language</option>
                <option value={'en'}>English</option>
                <option value={'ko'}>Korean</option>
                <option value={'chi'}>Chinese</option>
                <option value={'hi'}>Hindi</option>
            </select>
        </div>
    )
}

export default Languageoption;
