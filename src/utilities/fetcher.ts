const fetcher = async (endPoint:string) => {
    try {
        const resp = await fetch(endPoint);
        const data = await resp.json();
        return data;
    } catch (error) {
        return error;
    }
}

export default fetcher;