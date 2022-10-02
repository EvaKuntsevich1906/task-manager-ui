const request = async (url, method = `POST`, body = null, headers = {}) => {
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

export default request;