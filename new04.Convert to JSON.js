function convertToJSON (firstName, lastName, hairColor){
let object = {}
object.name=firstName;
object.lastName=lastName;
object.hairColor=hairColor;    
let convertToJSON=JSON.stringify(object)

    console.log(convertToJSON);
}
convertToJSON('George', 'Jones', 'Brown');
convertToJSON('Peter', 'Smith', 'Blond');
