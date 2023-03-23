# Best Practices  


**-Please only add script to your case when it is necessary.**  
**-If there is a setting available, please use first prior to adding code to your case.**  
**-Do not script using any hardcoded IDs from your case (i.e. Payer IDs, Product IDs, etc.).**  
**-If you are copying a script from an existing case, still add your name and the date  
the script was added to the new case, but also include the case the script was copied from  
and who originally wrote it.**  


### What to include?

When moving or utilizing scripts make sure to include the following comments in your script to ensure readability and to make future troubleshooting easier.

> Where the script is located (i.e. OnLoad, OnEligible)  
> What rate groups the script applies to (i.e. All Rate Groups or name the specific ones)  
> Plan year this script was added for and if it would be available for All Plan Years  
> What the script is doing  
> Who wrote script including the date it was written  

#### Example:

//OnEligible  
//PGL Hourly rate groups only  
//Added for 2019 initially, but should be used for All Plan Years moving forward  
//Use location, job class and gross salary to determine  
//medical rate group  
//John Doe (10/22/2019)  

#### Example 2:

//OnEligible  
//PGL Hourly rate groups only  
//Added for 2019 initially, but should be used for All Plan Years moving forward  
//Use location, job class and gross salary to determine  
//medical rate group  
//Copied from [Case Name], Originally written by [Other Name]  
//John Doe (10/22/2019)  


#### Lyle's Key Points:

1. Opening comments explain what the script does and whether it is local only to this location/rate group.

2. Comments speak to your peers. If someone had to diagnose a problem or add handle additional scenarios by changing your script, what do you want them to know? If you considered and dismissed a different implementation, explain why.

3. Sign & date your work (great job!).

4. Check for nulls. Note that Event.Coverage and Event.Coverage.PayerProduct could be null.

5. Declare types wherever possible.

6. Always align braces vertically.
    {
        ...
    }
    
7. Break out of loops if you're done. No need to keep looping if you found what you're looking for.

8. Declarations should NEVER be conditional.
    if (Event.PayrollCompany.Name == "Payroll Dept.")
        var hsaOpt = "EO";
    ...
    
    Define variables in the scope in which they're used.

9. Watch your indentation. Use indentation to show branches and loops in the code.

10. Always explain when you comment out code. Only leave it around if you have a good reason (such as you might re-enable it again later).

11. Pick up your toys! Once the script is working, do a final check on the code for quality. Craftsmanship matters!
