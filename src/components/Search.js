import React from 'react';
import './Search.css';

function Search() {

    // const [inputval, setval] = useState('')

    return (
        <div className="container">
            <form>
                <div className="form-up">
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label  className="form-label-one">Search Topic</label>
                        <input type="text" className="form-control input-one" placeholder="Search doctors,clinic,Hospitals etc"/>
                    </div>
                    <div className="col-md-6">
                        <label>Location</label><br />
                        <input type="text" className="form-control input-two w-75" placeholder="Location" />
                        <button>Find Now</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Search;
