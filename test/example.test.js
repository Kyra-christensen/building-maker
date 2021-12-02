// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { makeStatsString } from '../utils.js';
const test = QUnit.test;

test('makeStatsString should return a string of the stats count', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `You clicked on the waterfront 4 times, on the skyline 3 times, and on the castle 2 times. Everybody loves your city's slogan:`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeStatsString(4, 3, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
