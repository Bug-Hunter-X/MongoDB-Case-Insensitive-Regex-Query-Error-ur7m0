# MongoDB Case-Insensitive Regex Query Error

This repository demonstrates a common error when using case-insensitive regular expressions in MongoDB queries.  The bug arises from improper escaping of special characters within the regex pattern, leading to unexpected query results.

The `bug.js` file contains the erroneous code.  The solution, which utilizes proper escaping techniques, is in `bugSolution.js`.

## Bug Description

The original code attempts a case-insensitive search using `$regex` with the `/i` flag.  However, if the regex pattern contains special characters like `.` or `*`, which have special meaning in regex, they must be properly escaped to prevent unintended matching behavior. Failure to do so results in errors or incorrect search results.

## Solution

The corrected code in `bugSolution.js` showcases how to properly escape special characters in the regex pattern using the `\` escape character before special characters.