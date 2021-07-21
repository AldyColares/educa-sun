/**
 * filter array of objects by one element of each objects. 
 * 
 * @param   {string} Filter - the name that filter object. 
 * @param   {object} Object - the array of objects.   
 * @returns {array}         - list string 
*/
export default (filter, arrayObject) => {

const result = arrayObject.map((element) => {
    return element[filter];  
});

return result;
}