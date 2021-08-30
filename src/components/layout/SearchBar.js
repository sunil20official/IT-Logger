import React , { useRef }  from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchLogs , clearFilter } from '../../actions/logActions';


 const SearchBar = ({ searchLogs , clearFilter }) => {

    const text = useRef('');
     const onChange = (e) => {
         if(text.current.value !== '') {
             searchLogs(text.current.value);
             console.log(text.current.value);
         } else {
             clearFilter();
         }
     }
    return (
        <nav style={{marginBottom:"30px"}} className="blue">
            <div className="nav-wrapper">
            <form>
                <div className="input-field">
                <input ref={text} id="search" type="search" onChange={onChange}/>
                <label className="label-icon" htmlFor="search"><i className="material-icons"> search </i></label>
                <i className="material-icons">close</i>
                </div>
            </form>
            </div>
        </nav>
    )
}

SearchBar.propTypes = {
    searchLogs: PropTypes.func.isRequired
}

export default connect(
         null , 
     { searchLogs , clearFilter }
     )(SearchBar) 