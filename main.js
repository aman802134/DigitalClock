
    const hour = document.getElementById("hour");
    const minute = document.getElementById("minute");
    const second = document.getElementById("second");
    const AmPm = document.getElementById("Am-pm")
    setInterval(() => {

        const time = new Date();
        let Hour = (time.getHours()  % 12 || 12)
        let Minute = time.getMinutes();
        let Second = time.getSeconds();
        
        if(Hour<10){
            Hour = "0"+Hour
        }
        if(Minute<10){
            Minute = "0"+Minute
        }
        if(Second<10){
            Second = "0"+Second
        }

        if(Hour > 12){
            AmPm.textContent = "PM"
        }else{
            AmPm.textContent = "AM"

        }
        hour.textContent = Hour;
        minute.textContent = Minute;
        second.textContent = Second;

    }, 1000);













