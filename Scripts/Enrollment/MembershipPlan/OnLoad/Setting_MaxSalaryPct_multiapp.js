//OnLoad
//Setting Max Salary Percent of a membership plan 
//based on election made on another membership plan during the same enrollment

//example below is when combined election for both membership plans can not exceed 4%

//variable referencing other application used as condition for current application max salary
var app1 = Event.Applications[/*'plan XML tag name'*/];

//check app1 and for app1 (other membership plan deduction option code)
if (app1 && app1.DeductionOptionCode){

    //decimal check used to make sure we are only adjusting by whole numbers
    var decimalCheck = app1.DeductionOptionCode.Split('.')[1];
    if (decimalCheck == '00'){
        //check got app1 deduction code
        //deduction option code returns sting decimal replace '4.00'
        if (app1.DeductionOptionCode == '4.00'){
            //based on app1 set current app Max Salary percentage in Decimal type
            //change 0.00 to value for current app Max Salary when app1 has specific deduction option code
            Event.Config.MaxSalaryPct = 0.00;
        //when app1 is '3.00'
        }else if (app1.DeductionOptionCode == '3.00'){
            //set Max salary to 1.00
            Event.Config.MaxSalaryPct = 1.00;
        //when app1 is '2.00'
        }else if (app1.DeductionOptionCode == '2.00'){
            //set Max salary to 2.00
            Event.Config.MaxSalaryPct = 2.00;
            //when app1 is '1.00'
        }else if (app1.DeductionOptionCode == '1.00'){
            //set Max salary to 3.00
            Event.Config.MaxSalaryPct = 3.00;
            //when app1 is '0.00'
        }else if (app1.DeductionOptionCode == '0.00'){
            //set Max salary to 4.00
            Event.Config.MaxSalaryPct = 4.00;
        }
    }
    //additional script can be added here when decimal is not 00 (use else or else if)
}