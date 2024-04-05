Phone Number Validator accepts a string input and determines whether or not it is a valid US phone number using regular expressions. The following formats are valid phone numbers:
1 555-555-5555
1 (555) 555-5555
1(555)555-5555
1 555 555 5555
5555555555
555-555-5555
(555)555-5555
This implementation uses a number of regex patterns stored in an array. The check button calls a function that checks the input string against each pattern in the array.
This tool was developed as an exercise for FreeCodeCamp.org's course in JavaScript and Data Structures.