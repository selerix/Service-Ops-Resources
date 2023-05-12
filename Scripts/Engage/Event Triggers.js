//default to false (no event)
Event.Value = false;

//loop though employee events
if (Event.Employee && Event.Employee.ActiveApplications){
    for (var app in Event.Employee.ActiveApplications){
        //agent follow up or pending check
        if (app.AgentPending == true){
            //set to true to create event
            Event.Value = true;
            //then set or create an Event date, date time now will set for the time when event happens and message sent
            Event.EventDate = DateTime.Now;
        }
    }
}
