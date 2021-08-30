import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteLog, setCurrent} from '../../actions/logActions';
import PropTypes from 'prop-types';

 const LogItem = ({ log , deleteLog , setCurrent }) => {
    return (
          <li className="collection-item">
            <div>
            <a href = '#edit-log-modal'
            className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}
            onClick={() => setCurrent(log)}
             > {log.message} </a>
             <br />
             <span className='grey-text'>
                 <span className ='black-text' >ID #{log.id}{' '}</span>last updated by {' '}
                 <span className = 'black-text' > {log.tech} </span> on{' '}
                 <Moment format='MMMM Do YYYY, h:mm:ss a'> {log.date} </Moment>
             </span>
             <a href="#!" className="secondary-content">
                 <i className="material-icons grey-text" onClick={() => deleteLog(log.id)}>delete</i>
             </a>
             </div>
         </li>
    )
}

LogItem.propTypes = {
    log: PropTypes.object.isRequired,
    deleteLog: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    current: state.log.current
});

export default connect(
    mapStateToProps,
    { deleteLog , setCurrent } 
    )( LogItem )