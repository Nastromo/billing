import { combineReducers } from 'redux';
import { notificationCss, notificationText } from './Notification';
import { loginSpinner } from './Spinner';
import { active } from './SetActive';
import { dropdownStatus, dropdownOption } from './DropDown';
import { cpt, cptLoading, cptErrored, selectedCpt, chosenCpt } from './Cpt';
import { createMode, insCreateMode } from '../reducers/Create';
import { diagLoading, diagErrored, diags } from '../reducers/Diagnosis';
import { insLoading, insErrored, insurances, chosenIns, insSelected } from '../reducers/Ins';
import { isTestLoading, testInput, testList, test, isCptLoading, cptCode, cptList, chosenCptFee, imfeesList } from '../reducers/Fee';



const RootReducer = combineReducers({
    imfeesList,
    chosenCptFee,
    isCptLoading,
    cptCode,
    cptList,
    test,
    isTestLoading,
    testInput,
    testList,

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
    diags,

    insLoading,
    insErrored,
    insurances,
    chosenIns,
    insSelected,

    insCreateMode
    
});


export default RootReducer;