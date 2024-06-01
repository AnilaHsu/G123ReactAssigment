# Online Order App


<!-- toc -->

* [Description](#description)
  * [Step 1](#step-1)
  * [Step 2](#step-2)
  * [Step 3](#step-3)
  * [Step 4](#step-4)
  * [Notes](#notes)

<!-- tocstop -->

## Description

This is a multi-step form to help users pre-order food from restaurants.

### Step 1

* Select Meal Category (breakfast/lunch/dinner)
* Need to input the number of people (maximum 10) 

### Step 2

* Select restaurants that provide meals based on selection in Step 1. 

### Step 3

* Select dishes based on the meal and restaurant selected in Step 1 & Step 2.

* First choose a dish
* Then the user can add the number of servings of the dish (defaulted to 1)
* Also, the user CAN'T select the same dish twice, rather add more servings.

The total number of dishes (i.e. Number of dishes \* respective serving) should be greater or equal to the number of people selected in Step 1 and a maximum of 10 is allowed.

### Step 4

Users can review all his/her previous choices before the final submission.

### Notes

* The user can't proceed to the next step unless they have valid inputs on the current step.
* if inputs are invalid, show validation errors.
* At any step user can go back and change their preference on any previous step.
* Print the results in the console for the final submission.
