import axios from 'axios';

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

export const checkSubpageNameIsExist = async (name) => {
    let test;
    await axios.post('http://localhost:4000/api/checksubpagenameisexist', { name: name })
        .then(response => {
            test = response.data.isExist
        }).catch(error => {
            console.log('error')
        });

    return (test)
}