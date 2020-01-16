# Intelligenics Modular Builder

This package builds modules by looks for differences in the check in for a branch. Based on the projects returned it then runs 
a specified npm command against each project.   

# parameters 
To run the command do the following 

```
node modulize COMMITNO COMMAND 
``` 

So as an example the following command would use the commit no 5CC4879 and for each project found would run the npm command prepublish found in the scripts for each project

``` 
node modulize 5CC4879 npm run prepublish
```

# Contact Information

Feel free to contact me using the following details

- Name: Matthew Parton M.Sc.
- LinkedIn Profile: https://www.linkedin.com/in/intelligenics/
- Website: http://www.intelligenics.co.uk
- Email: matthewparton@intelligenics.co.uk

## Licence
Copyright 2019  Intelligenics Ltd.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
