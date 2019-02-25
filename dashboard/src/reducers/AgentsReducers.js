const INITIAL_STATE = {
    name: '',
    departament: ''
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'change_name':
            return { ...state, name: action.payload }
            break;
        case 'change_departament':
            return { ...state, departament: action.payload };
            break;
        default:
            return state
    }
}