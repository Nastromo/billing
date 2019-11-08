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
import { searchQuery, searchLoading, searchResults } from '../reducers/SearchInput';
import { newDDStatus, newDDOption } from '../reducers/NewDropDown';
import { epayments, eclient, paymentSelected } from '../reducers/EPayments';




const RootReducer = combineReducers({
    paymentSelected,
    eclient,
    epayments,
    newDDStatus,
    newDDOption,
    searchQuery, 
    searchLoading, 
    searchResults,
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