import { StackNavigator } from 'react-navigation'
import AllJournals from './AllJournals';
import Journal from './Journal';
import CreateJournal from './CreateJournal';

export default AppNavigator = StackNavigator({
  AllJournals: { screen: AllJournals },
  Journal: { screen: Journal },
  CreateJournal: { screen: CreateJournal }
});