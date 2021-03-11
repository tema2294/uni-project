export function basket(state={}, action) {
    switch(action.type) {
        case "addBasket":
            return action.payload;
        case "ACTION_2": return action.payload;

        default: return state;
    }
}

