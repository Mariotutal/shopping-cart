# Shopping Cart

A shopping cart mde with parcel, zustand, reactJS

## Prerequisites

- Node.js (version 18.x.x or higher)
- Parcel (version 2.8.3 or higher)
- React Hook form
- Zustand
- 

## How to Use the Application

1. Clone or download the repository.
2. Install the dependencies with `yarn install`.
3. Run the application with `yarn start`.
4. The application will automatically open in the browser at `http://localhost:1234`.

## How to Build the Application for Production

1. Run the command `yarn run build`.
2. The compiled files will be in the `dist/` directory.
3. Upload the files to a web server to make the application available online.

## Note
the build for production was broken because an error on zustand with parcel that was fixed on:
- https://github.com/pmndrs/zustand/pull/1661

## Regex codes
### Email
The regex code used to verify the email is this:
```js
/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
```
```js
/^                  // Matches the start of the string
\w+                 // Matches one or more alphanumeric characters
([\.-]?\w+)*        // Matches zero or more occurrences of a dot, hyphen, or nothing followed by one or more alphanumeric characters
@                   // Matches the @ symbol
\w+                 // Matches one or more alphanumeric characters
([\.-]?\w+)*        // Matches zero or more occurrences of a dot, hyphen, or nothing followed by one or more alphanumeric characters
(\.\w{2,3})+        // Matches one or more occurrences of a dot followed by two or three alphanumeric characters representing the domain extension (e.g. ".com" or ".org")
$/                  // Matches the end of the string

```
This regular expression checks if a string follows the format of a valid email address, which includes a username, an @ symbol, a domain name, and a domain extension. If the string does not follow this format, the validation will fail.

### PhoneNumber

```js
/^          // Matches the start of the string
\+          // Matches the plus sign
\d{3}       // Matches exactly three digits
\s          // Matches a whitespace character
\d{8}       // Matches exactly eight digits
/           // Ends the regular expression

```
This regular expression checks if a string follows the format of a phone number that starts with a plus sign (+), followed by three digits, a whitespace character, and then eight more digits. This format is commonly used for international phone numbers.