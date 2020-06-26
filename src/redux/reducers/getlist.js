const getListReducer = (state = [], action) => {
    console.log('in getListReducer', action.payload);
    console.log('heres this type', action.type);

    if (action.type === 'SET_LIST') {
        return action.payload;
    }
    return state;
};

export default getListReducer;