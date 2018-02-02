import { connect } from 'react-redux';
import CreateJournal from '../components/CreateJournal';
import { setAllJournals, saveJournal } from '../actions';

const mapStateToProps = ({ journals }) => {
  return {
    journals
  }
};

export default connect(mapStateToProps, { setAllJournals, saveJournal })(CreateJournal);
