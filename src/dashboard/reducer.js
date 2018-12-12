const initialState = {
    tickets: []
};

export default function dashboard(state = initialState, action) {
    switch (action.type) {
        case 'ADD_NEW_TICKET':
            return {
                ...state,
                tickets: [...state.tickets, action.ticket]
            };
        default:
            return state;
    }
}
