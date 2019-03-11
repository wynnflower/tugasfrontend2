//Global state itu sendiri
import{combineReducers} from 'redux'
import UserState from './userGlobal'
import ProductState from './productGlobal'
import KataState from './latTextGlobal'
import ToDoState from './prreducer'

export default combineReducers({
    user:UserState,
    product:ProductState,
    kata:KataState,
    todo:ToDoState
});