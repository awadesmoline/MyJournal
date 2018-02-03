import { connect } from 'react-redux';
import CreateJournal from '../components/CreateJournal';
import { setAllJournals, saveJournal } from '../actions';

const mapStateToProps = ({ journals: { journals, currentJournal } }) => {
  return {
    journals,
    currentJournal
  }
};

export default connect(mapStateToProps, { setAllJournals, saveJournal })(CreateJournal);
