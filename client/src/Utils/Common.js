export const getUser = () => {
    const userStr = sessionStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    else return null;
}

export const getToken = () => {
    return sessionStorage.getItem('token') || null;
}

export const removeUserSession = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
}

export const setUserSession = (token, user) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(user));
}

export const changeElementPositionInArray = (array, _id, direction) => {
    const id = Number(_id);

    const element = array[id];
    let newArray = array;

    if (direction === 'up' && id > 0) {
        newArray[id] = newArray[id - 1];
        newArray[id - 1] = element;
    }
    else if (direction === 'down' && id < array.length - 1) {
        newArray[id] = newArray[id + 1];
        newArray[id + 1] = element;
    }

    return (newArray);
}