## Beep Boop

### https://github.com/r-craig73/beep-boop/

### GitHub Page:  https://r-craig73.github.io/beep-boop/

#### by Ron Craig (ron.craig@comcast.net)

## Brief Description
### A program that allows a user to input a number.
### The program will return a range of numbers from 0 to the chosen number.
### In between, there will be three different exceptions.

## Setup
### A program that allows a user to input a number.
### The program will return a range of numbers from 0 to the chosen number.
### In between, there will be three different exceptions.
### (1) Numbers divisible by 3 are replaced with "I'm sorry Dave. I'm afraid I can't do that."
### (2) Numbers containing 1 are replaced (all digits) with "Boop!"
### (3) Numbers containing 0 are replaced (all digits) with "Beep!"

## Beep Boop Specifications (incrementing number)

### Program replaces numbers divisible by 3 with "I'm sorry Dave. I'm afraid I can't do that." (Done)
#### Input: 3
#### Output: [I'm sorry Dave. I'm afraid I can't do that.]

### Program replaces 0 with "Beep!" (Done)
#### Input: 0
#### Output: [Beep!]

### Program replaces 3 with numbers (start:0, end:3) and exceptions. (NA)
#### Input: 3
#### Output: [Beep!] [Boop!] [2] [I'm sorry Dave. I'm afraid I can't do that.]

### Program replaces 4 with numbers (start:0, end:4) and exceptions. (NA)
#### Input: 4
#### Output: [Beep!] [Boop!] [2] [I'm sorry Dave. I'm afraid I can't do that.] [4]

### Program replaces 5 with numbers (start:0, end:5) and exceptions. (NA)
#### Input: 5
#### Output: [Beep!] [Boop!] [2] [I'm sorry Dave. I'm afraid I can't do that.] [4] [5]

### Program replaces 6 with numbers (star: 0, end:6) and exceptions. (NA)
#### Input: 6
#### Output: [Beep!] [Boop!] [2] [I'm sorry Dave. I'm afraid I can't do that.] [4] [5] [I'm sorry Dave. I'm afraid I can't do that.]

### Program replaces numbers containing 1 with "Boop!" and exceptions. (NA)
#### Input: 10, 100, 1000
#### Output: [Beep!] [Boop!] [2].....[Boop!]

### Program replaces numbers containing 0 with "Beep!" (NA)
#### Input: 20, 30, 40, 50
#### Output: [Beep!] [Boop!]....[Beep!]

### Program replaces 1 with values from 0 and ends at 1. Exceptions are included for values less than 1. (NA)
#### Input: 1
#### Output: [Beep!] [Boop!]

### Program replaces 2 with values from 0 and ends at 2. Exceptions are included for values less than 2. (NA)
#### Input: 2
#### Output: [Beep!] [Boop!] [2]

## Known Bugs
### None known issues at the moment.

## Support and contact details
_If you run into problems or have questions, please contact:_
* _Ron Craig at: ron.craig@comcast.net_

## Technologies Used
_HTML, JavaScript, jQuery, and CSS_

### License
*Distributed under the GPL License*

Copyright (c) 2018 **_Ron Craig_**
