/**
 * filter array of objects by one element of each objects. 
 * 
 * @param   {object} Object - The array of objects   
 * @returns {array}         - list string 
*/
export default (arrayObject) => {

  if (arrayObject.length !== 0) {
    const result = arrayObject.map((element) => {
      return { name: element["name"], professor: element["professor"] };
    });
    return result;
  }
  return [];
}