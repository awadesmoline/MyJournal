import { connect } from 'react-redux';
import Journal from '../components/Journal';
import { setAllJournals } from '../actions';

const mapStateToProps = ({ journals: { journals, currentJournal } }) => {
  return {
    journals,
    currentJournal
  }
};

export default connect(mapStateToProps, { setAllJournals })(Journal);
