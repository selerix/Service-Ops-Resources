// Single row logic boiler plate script w/ record count additonal conditions 
if (Event.FirstEmployeeRecord){
    
    //local variable to temporarily store the count
    var tempCount = Event.Globals['RecordCount'];
     
    //the globals get cleared
    Event.Globals.Clear(); 
    
    //the record count is restored from the tempCount variable that was storing
    Event.Globals['RecordCount'] = tempCount; 
    
}

//record count inital value for itteration logic in header/trailer
if (!Event.Globals['RecordCount'] || Event.Globals['RecordCount'] == '' || Event.Globals['RecordCount'] == null)
{
    Event.Globals['RecordCount'] = 0;
}

//reference in field definiton Blank Field >> Event.Value = Event.Globals['RecordCount]; 

//** Throw error start **

//this will allow you to validate any Event.Record value
//uncomment out the below line and replace JobClass with any Event.Record property in quotes;

// throw new Error(Event.Record['JobClass']);

//** Throw error end **


//**additional conditions start**
//use this space to collect/adjust data set conditions here for Event.Record will affect native report field out puts


//**additional conditions end**

//assigns Event.Record to a global based on plan name
//Event.Globals['Medical'] Event.Globals['Dental'] Event.Globals['Vision'] etc.
//can then chain to properties/values within Event.Record specific to plans for out put
var planName = Event.Record['PlanName'];
Event.Globals[planName] = Event.Record;

//single row skip, all collected data is out put only on the last row out put of each individual employee
if (!Event.LastEmployeeRecord)
{
    Event.SkipRecord = true;
}
