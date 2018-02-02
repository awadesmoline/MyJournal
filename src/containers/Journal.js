import { connect } from 'react-redux';
import Journal from '../components/Journal';
import { setAllJournals } from '../actions';

const mapStateToProps = ({ journals }) => {
  return {
    journals
  }
};

export default connect(mapStateToProps, { setAllJournals })(Journal);
