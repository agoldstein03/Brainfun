[
{
    "lesson": 2,
    "lessonTitle": "The + operator",
    "exercise":1,
    "directions": "Welcome to lesson 2! In this lesson, we will focus on the + operator. The + adds one to the value of the current location. For this exercise, use the + operator to increase the value of the current location by 1.",
    "hints":[
          "Click the plus sign button once.", "Click the check button when you are done to submit and check your work."
    ],
    "checker":""
},
{
    "lesson":2,
    "lessonTitle":"The + operator",
    "exercise":2,
    "directions":"For this exercise, use the + operator to increase the value of the current location by 3.",
    "hints":[
        "Click the plus sign button 3 times.", "Remember to click the check button when you are done to submit and check your work."
    ],
    "checker":""
},
{
    "lesson":3,
    "lessonTitle":"The - operator",
    "exercise":1,
    "directions":"Welcome to lesson 3! In this lesson, we will focus on the - operator. The - subtracts one from the value of the current location by 1. For this exercise, use the - operator and what we already learned (the + operator) to add 2 to the value of the first location and then subtract 1. Make sure to use both the addition and subtraction operator (no cheating!).",
    "hints":[
        "Click the + button first and then the - button!",
        "Click the + button twice and the - button once."
    ],
    "checker":""
},
{
    "lesson":3,
    "lessonTitle":"The - operator",
    "exercise":2,
    "directions":"For this exercise, use what you have learned to add 6 to the value of the first location and then subtract 3.",
    "hints":[
        "Use some the addition operators and after that add some subtraction operators!"
    ],
    "checker":""
},
{
    "lesson":4,
    "lessonTitle":"The > operator",
    "exercise":1,
    "directions":"Welcome to lesson 4! In this lesson, we will focus on the > operator. The > is used to move the current location to the right by one. Remember, the pointer shows the current location. For this exercise, use the > operator and what you already learned to add 1 to the current location and add 2 to the location to the right.",
    "hints":[
        "Try clicking the > button and seeing what happens!",
        "Make sure you use both the + button and the > button."
    ],
    "checker":""
},
{
    "lesson":4,
    "lessonTitle":"The > operator",
    "exercise":2,
    "directions":"For this exercise, use the > operator to go to location #2 and add 2. After this, go over and add 2 to location #3 and then subtract 1. Make sure to use the addition and subtraction operators too!",
    "hints":[
        "Remember, locations start at 0, so location #2 is actually the third location!",
        "First move to the location #2 by pushing the > button twice.",
        "Use the + button to add to locations #2 and #3 once you get there."
    ],
    "checker":""
},
{
    "lesson":5,
    "lessonTitle":"The < operator",
    "exercise":1,
    "directions":`Welcome to lesson 5! In this lesson, we will focus on the < operator. The < is used to move the location to the left. If you try to move the left, you will enter negative location values. For now, just don’t do that! For this exercise, use the above operator to add 3 to the current location and add 2 to location #1. Remember, locations start at 0, so location #1 is actually the second location! After that go back to location #0 and subtract 1.`,
    "hints":[
        "First click the + button 3 times.",
        "You can use the > and < operators to move to the right or left respectively."
    ],
    "checker":""
},
{
    "lesson":5,
    "lessonTitle":"The < operator",
    "exercise":2,
    "directions":`For this exercise, use the > and + operator to add 1 to the current location, 2 to location #2, and 3 to the location #2. After this make all three locations equal to 0 with the < and - operator.`,
    "hints":[
        "Use the + and > operators at first. Then switch to - and < operators."
    ],
    "checker":""
},
{
    "lesson":6,
    "lessonTitle":"The [ and ] operator for the purpose of loops",
    "exercise":1,
    "directions":`Welcome to lesson 6! In this lesson, we will focus on the [ and ] operators. The [ and ] operators are used to repeatedly doing something. For example, let’s say we have a number that we want to move to the location to the right of its current location. We can execute the following code to do so. First, we will add some amount to the first location we will say 3. This is done via the commands +++. Now our locations look like this: 3 0. Now time for the location moving process. The code with annotations next to it looks like this: The operations within the brackets repeat until the loop lands on a location with a value of 0.+++ (The code to add an initial value in location 1)[ (starting loop) >+ (Go to the right location and add 1 to location 2) <- (Go to the left location and subtract 1 from location 1)]. Another Quick shortcut you should know is [-]: This command makes the current location 0. Let’s represent the two locations like this: 0 0. After this code executes, the position of the numbers will change. Using the skill above, try this question out yourself! Set the first location to have a value of 6. Use loops to move the 6 from the first location to the second location.`,
    "hints":[
        "Look at the example loop and change the value being moved between locations!"
    ],
    "checker":""
},
{
    "lesson":6,
    "lessonTitle":"The [ and ] operator for the purpose of loops",
    "exercise":2,
    "directions":`Using the skill above, try this question out yourself. Initially set the first location to have a value of 8. Move the 8 from the first to the second location. From there move the 8 to the third location! (Start with 8 0 0 an end with 0 0 8)`,
    "hints":[
        "Look at the example loop and change the value being moved between locations!",
        "After moving the example once, do the same thing again moving the number from location #1 to #2."
    ],
    "checker":""
},
{
    "lesson":7,
    "lessonTitle":"Big Numbers",
    "exercise":1,
    "directions":`In order to print out characters, we need to have the number in a location correlate to numbers on the ASCII table. However, the ASCII table uses big numbers, so how do we get numbers that big? Complete the exercises to explore this. For this exercise, use previously learned skills in order to set the first number equal to 10.`,
    "hints":[
        ""
    ],
    "checker":""
},
{
    "lesson":7,
    "lessonTitle":"Big Numbers",
    "exercise":2,
    "directions":`While what you did in the last exercise works, this expression is really long. We want to make this more concise. The brackets can also be used as a loop! Everything within the brackets continues to occur until the loop ends on a location with a value of 0! Using the loop operator from before, we can simulate multiplication. Example: Locations: 0 0 ++ Locations: 2 0 [ >+++++ (locations will be something like this: First iteration: 2, 5 Second Iteration: 1, 10 ) <- (locations will be something like this: First iteration: 1, 5 Second Iteration: 0, 10 ). After the second iteration, the value of the current location, location one is 0. Because of this, the loop ends. ] Locations: 0 10. Without annotations the code will look like: ++ [ >+++++ <- ]. For this exercise, use the skills developed to create some big numbers!  First, let’s start with having 15 stored in the second space.`,
    "hints":[
        "Think of two numbers that multiply to 15: 3 and 5. Look at the example and change the numbers with 3 and 5!"
    ],
    "checker":""
},
{
    "lesson":7,
    "lessonTitle":"Big Numbers",
    "exercise":3,
    "directions":`Nice job! Let’s get more advanced. How about we try having 50 stored in the second location!`,
    "hints":[
        "Think of two numbers that multiply to 50: 5 and 10. Follow the pattern in the example but change the values to the necessary numbers."
    ],
    "checker":""
},
{
    "lesson":7,
    "lessonTitle":"Big Numbers",
    "exercise":4,
    "directions":`Last one! Try having 75 stored in the second space!`,
    "hints":[
        "Think of two numbers that multiply to the closest number 72: 8 and 9. Look at the example and change the numbers with 8 and 9! After that, try and use operators to get to 75!"
    ],
    "checker":""
},
{
    "lesson":8,
    "lessonTitle":"The . operator",
    "exercise":1,
    "directions":`Welcome to lesson 8! In this lesson, we will focus on the . operator. The . operator is used to print out the value that corresponds to the ASCII symbol that corresponds to the number in the current location. For this exercise, use the . operator and your previous skills to print out the character A. Look at the ASCII table and find the corresponding value to the uppercase A.`,
    "hints":[
        "Store the ASCII number for A and then use the move to the location with the number and use the . operator. You will need to use what you learned in the big numbers section!"
    ],
    "checker":""
},
{
    "lesson":8,
    "lessonTitle":"The . operator",
    "exercise":2,
    "directions":`For this exercise, use your previous skills and print out the word “ATE”. Look at the ASCII table and find the corresponding value to the uppercase A, T, and E.`,
    "hints":[
        "Using what you learned in the big numbers lesson, store the ASCII number for A, T, E in different locations!"
    ],
    "checker":""
},
{
    "lesson":8,
    "lessonTitle":"The . operator",
    "exercise":3,
    "directions":`This one is going to be hard, so try your best! Use what you know to try and print out Hello`,
    "hints":[
        "Using what you learned in the big numbers lesson, store the ASCII number for H, e, l,l,o in different locations! Remember the ASCII number for lowercase and uppercase letters are different!"
    ],
    "checker":""
},
{
    "lesson":9,
    "lessonTitle":"The , operator",
    "exercise":1,
    "directions":`Welcome to lesson 9! In this lesson, we will focus on the , operator. The , operator is used to accept input from the user, it then stores the inputted value in the current location. For this excercise, use the , operator to take input from the user, then print it out.`,
    "hints":[
        "Remember that the , operator allows you to take input in and the . operator allows you to print out the value stored at the location."
    ],
    "checker":""
},
{
    "lesson":9,
    "lessonTitle":"The , operator",
    "exercise":2,
    "directions":`Use the , operator and before learned skills to store consecutive input from the user in the first three locations. Then move all the values one location to the right.`,
    "hints":[
        "Click the , button to get input and the > to move to the next location!",
        "Remember, you can use loops to shift values!"
    ],
    "checker":""
}
]
