import { connect } from 'react-redux';
import AllJournals from '../components/AllJournals';
import { setAllJournals, setCurrentJournal, deleteJournal } from '../actions';

const mapStateToProps = ({ journals: { journals, currentJournal } }) => {
  return {
    journals,
    currentJournal
  }
};

export default connect(mapStateToProps, { setAllJournals, setCurrentJournal, deleteJournal })(AllJournals);
