import { connect } from 'react-redux';
import CreateJournal from '../components/CreateJournal';
import { setAllJournals } from '../actions';

const mapStateToProps = ({ journals }) => {
  return {
    journals
  }
};

export default connect(mapStateToProps, { setAllJournals })(CreateJournal);
