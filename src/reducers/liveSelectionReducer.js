export default (state = '', action) => {
    let newState;

    switch(action.type)
    {
        case 'SELECT_LIVE':
            return action.color;

        default:
            return state;
    }
};