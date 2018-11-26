export default function dashboard(state = [], action) {
    switch (action.type) {
        case 'ADD_NEW_TICKET':
            return [...state, action.id];
        default:
            return state;
    }
}
