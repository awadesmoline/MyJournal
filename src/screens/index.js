import { StackNavigator } from 'react-navigation'
import AllJournals from './AllJournals';
import Journal from './Journal';
import CreateJournal from './CreateJournal';
import JournalSections from './JournalSections';

export default AppNavigator = StackNavigator({
  JournalSections: { screen: JournalSections },
  AllJournals: { screen: AllJournals },
  Journal: { screen: Journal },
  CreateJournal: { screen: CreateJournal }
});