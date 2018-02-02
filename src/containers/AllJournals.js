import { connect } from 'react-redux';
import AllJournals from '../components/AllJournals';
import { setAllJournals } from '../actions';

const mapStateToProps = ({ journals }) => {
  return {
    journals
  }
};

export default connect(mapStateToProps, { setAllJournals })(AllJournals);
