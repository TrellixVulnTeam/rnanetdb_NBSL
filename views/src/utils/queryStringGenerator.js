export const getQueryString = (formInputsData) => {
    const { sequenceLength, resolution, organism, method, releaseDate } = formInputsData;
    let queryString = '';
    try {
        queryString += getResolutionQUeryString(resolution);
        queryString += getReleaseDateQUeryString(releaseDate);
        queryString += getSequenceLengthQUeryString(sequenceLength);
        queryString += getOrganismQUeryString(organism);
        queryString += getMethodQUeryString(method);
    } catch (error) {
        console.log(error);
    }
    return queryString;
}

const getResolutionQUeryString = (resolution) => {
    let queryString = '';
    try {
        if (resolution.min && resolution.max) {
            queryString += `&min_resolution=${resolution.min}&max_resolution=${resolution.max}`;
        }
        if(resolution.min && !resolution.max){
            queryString += `&min_resolution=${resolution.min}`;
        }
        if(!resolution.min && resolution.max){
            queryString += `&max_resolution=${resolution.max}`;
        }
    } catch (error) {
        console.log(error);
    }
    return queryString;
}

const getReleaseDateQUeryString = (releaseDate) => {
    let queryString = '';
    try {
        if (releaseDate.min && releaseDate.max) {
            queryString += `&min_release_date=${releaseDate.min}&max_release_date=${releaseDate.max}`;
        }
        if(releaseDate.min && !releaseDate.max){
            queryString += `&min_release_date=${releaseDate.min}`;
        }
        if(!releaseDate.min && releaseDate.max){
            queryString += `&max_release_date=${releaseDate.max}`;
        }
    } catch (error) {
        console.log(error);
    }
    return queryString;
}

const getSequenceLengthQUeryString = (sequenceLength) => {
    let queryString = '';
    try {
        if (sequenceLength.min && sequenceLength.max) {
            queryString += `&min_length=${sequenceLength.min}&max_length=${sequenceLength.max}`;
        }
        if(sequenceLength.min && !sequenceLength.max){
            queryString += `&min_length=${sequenceLength.min}`;
        }
        if(!sequenceLength.min && sequenceLength.max){
            queryString += `&max_length=${sequenceLength.max}`;
        }
    } catch (error) {
        console.log(error);
    }
    return queryString;
}

const getOrganismQUeryString = (organism) => {
    let queryString = '';
    try {
        if (organism) {
            queryString += `&organism=${organism}`;
        }
    } catch (error) {
        console.log(error);
    }
    return queryString;
}

const getMethodQUeryString = (method) => {
    let queryString = '';
    try {
        if (method) {
            queryString += `&method=${method}`;
        }
    } catch (error) {
        console.log(error);
    }
    return queryString;
}
