let headers = {};
const token = window.localStorage.getItem('token');
if (token) {
    headers.Authorization = 'Bearer ' + token;
}
const urlBase = process.env.REACT_APP_SERVER_API_URL;

const httpRequest = async (url, method="GET", body, header = null) => {
    if(header){
        headers = {...headers, ...header};
    }
    let chekInstaceOfBody = body instanceof FormData; 
    if(body && chekInstaceOfBody === false){
        headers['Content-Type'] = "application/json";
        body = JSON.stringify(body);
    }
    const request = await fetch(`${urlBase}${url}`, {
        method,
        headers,
        body
    });

    let response = {};
    response.data = await request.json();
    response.status = await request.status;
    return response;
}

export default httpRequest;