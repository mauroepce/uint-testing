# Unit-testing

This example was created to unit-testing using Javascript. I used: mocha, sinon, chai and axios.

- File app.js(src) => app.spec.js(test):
This JavaScript file example is intended as a beginners guide to unit testing with Mocha and Chai.

To start off I writed a unit test and made it work with the basic built in Node.js Assert package and then I swaped this out for the more power assertions available in the Chai library.

Once I writted the first unit test, I expanded to create a more robust function and cover different scenarios of how the function should behave.

- File app1.js(src) => app1.spec.js(test): 
In essence, I take a look at a more complicated source file which has a class that has a few methods which send requests to the GitHub API. I sent a network request (using the Axios library). The code is asynchronous.

I also used the sinon library alongside the sinon-chai assertion library.  I used stub or ‘fake’ requests sent to the GitHub API using Axios which enable me to return my own responses allowing my to focus on the logic and code inside of the function I´m writing unit tests for, rather than worrying about if the underlying libraries and APIs I´m using are working correctly.


## Installation

Dependencies:

npm install --save-dev mocha chai nyc
npm i axios
npm i sinon sinon-chai --save-dev

# run the test
npm run test

# run coverage
Create a folder with a html coverage src files

npm run coverage

# Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
License MIT