let userInput: unknown; // Better than any because it is more restrictive
let userName: string;

userInput = 5;
userInput = 'Max';
// userName = userInput; // This will throw an error because userInput is unknown but not if userInput is type: any

function generateError(message: string, code: number): never {
  //This return type is a little more clear than void
  // Never return anything
  throw { message: message, errorCode: code };
}

const result = generateError('An error occurred!', 500);
