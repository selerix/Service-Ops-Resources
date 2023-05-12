
//take initial audience and set to none
Event.Result = false;

//define age cut off
var ageCutOff = 21;

//loop through active coverages for covered people
if (Event.Employee && Event.Employee.LatestCoverages()){
    for (var i in Event.Employee.LatestCoverages()){
        if (i.CoveragePersons){
            //loop through covered people for each covered persons Age as of 8 months from now
            for (var j in i.CoveragePersons){
                if (j.Person){
                    var ageOffDate = DateTime.Now.AddMonths(8);
                    var futureAge = j.Person.Age(ageOffDate);
                    //compare age in 8 months to cut off age and comparing the age off date as being within a specific set of dates
                    if ((futureAge >= ageCutOff) && ((ageOffDate >= new DateTime(2023, 1, 1)) && (ageOffDate <= new DateTime(2023, 1, 31)))){
                        //if true send engagement
                        Event.Result = true;
                    }
                }
            }
        }
    }
}
