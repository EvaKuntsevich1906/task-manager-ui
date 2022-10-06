const postRequest = async (url, method = `POST`, body = null, headers = {}) => {
    try {
        if (body) {
            body = JSON.stringify(body);
            headers['Content-Type'] = 'application/json';
        }
        const response = await fetch(url, {method: method, headers: headers, body: body})
        const parsedData = await  response.json();
        return parsedData;
    } catch (err) {
        console.log(err.message);
    }
}
const putRequest = async (url, method = `PUT`, body = null, headers = {}) => {
    try {
        if (body) {
            body = JSON.stringify(body);
            headers['Content-Type'] = 'application/json';
        }
        const response = await fetch(url, {method: method, headers: headers, body: body})
        const parsedData = await  response.json();
        return parsedData;
    } catch (err) {
        console.log(err.message);
    }
}

const deleteRequest = async (url, method = `DELETE`, body = null, headers = {}) => {
    try {
        if (body) {
            body = JSON.stringify(body);
            headers['Content-Type'] = 'application/json';
        }
        const response = await fetch(url, {method: method, headers: headers, body: body})
        const parsedData = await  response.json();
        return parsedData;
    } catch (err) {
        console.log(err.message);
    }
}
const getRequest = async (url, method = `GET`, body = null, headers = {}) => {
    try {
        if (body) {
            body = JSON.stringify(body);
            headers['Content-Type'] = 'application/json';
        }
        const response = await fetch(url, {method: method, headers: headers, body: body})
        const parsedData = await  response.json();
        return parsedData;
    } catch (err) {
        console.log(err.message);
    }
}

export {postRequest, putRequest, deleteRequest, getRequest};