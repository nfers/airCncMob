import { createAppContainer, 
         createSwitchNavigator} from 'react-navigation';

import Login from './pages/login';
import List from './pages/list';
import Books from './pages/book';

const Routes = createAppContainer (
    createSwitchNavigator({
        Login, 
        List, 
        Books
    })
);         

export default Routes;