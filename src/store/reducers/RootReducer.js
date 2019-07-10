import { combineReducers } from 'redux';
import { notificationCss, notificationText } from './Notification';
import { loginSpinner } from './Spinner';
import { active } from './SetActive';
import { dropdownStatus, dropdownOption } from './DropDown';
import { cpt, cptLoading, cptErrored, selectedCpt, chosenCpt } from './Cpt';
import { createMode } from '../reducers/Create';
import { diagLoading, diagErrored, diags } from '../reducers/Diagnosis';



const RootReducer = combineReducers({
    loginSpinner,
    notificationCss,
    notificationText,
    dropdownStatus,
    dropdownOption,
    active,

    cpt,
    cptLoading,
    cptErrored,

    selectedCpt,
    chosenCpt,

    createMode,
    diagLoading,
    diagErrored,
    diags
    
});


export default RootReducer;