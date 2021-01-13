
class Event {
    constructor(title, date, startTime, endTime) {
      this.title = title; //string
      this.date = date; //Date
      this.startTime = startTime; //whole number 0 to 23 representing the hour in military time
      this.endTime = endTime; //whole number 0 to 23 representing the hour in military time
    }
  }


class EventOrganizer {
    constructor() {
        this.events = []
    }
     start() {
        let select = this.mainMenu(); 
        while(select != '0') {
            switch(select) {
               case '1': 
                this.addNewEvent() 
                break; 
               case '2':
                this.removeEvent()
                break;
               default:
                   select = '0';  
            }
          select = this.mainMenu();  
        }
        alert(`You now are exiting`); 
    }
    mainMenu(){
        return prompt(`
        0 : Exit
        1 : Add Events
        2 : Remove Events
        `)
    }


    addNewEvent() {
        
            let names = prompt('Provide event name'); 
            let date = prompt('Please provide events date');
            let start = prompt("Please provide start time");
            let end = prompt("Please provide an end time");

            for (let i = 0;i<=this.events.length;i++) {
                if(this.events.length == 0) {
                    this.events.push(new Event(names,date,start,end));
                }
               else (this.events[i].title!== names && this.events[i].date !== date && this.events[i].startTime >= end && this.events[i].endTime <= startTime ) 
                {
                   this.events.push(new Event(names,date,start,end));
                }
          }
    }

    removeEvent() {
        let allEvetsForDisplay = ''
        for(let i =0;i<this.events.length;i++) {
            allEvetsForDisplay += `${this.events[i].title} on ${this.events[i].date}` + '\n'
        }
       let removeString = prompt(`Please select one of the following to delete` + '\n' + allEvetsForDisplay); 
        for(let i = 0;i<this.events.length;i++) {
            if(this.events[i].title == removeString) { 
                this.events.splice(i,1);
            }
        }

    }
}

let menu = new EventOrganizer();
menu.start(); 
