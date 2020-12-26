export const checkStatus = (res: any) => {
    if(res.ok){
        return res;
    } else {
        console.error(JSON.stringify(res));
        throw 'Server Error'
    }
}