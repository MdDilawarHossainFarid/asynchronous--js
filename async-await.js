const meeting = new Promise((resolve, reject) =>{
    if (0) {
        const meetingDetails = {
            name: "Technical Meeting",
            location: "Google Meet",
            time: "10:30AM"
        }
        resolve(meetingDetails)
    } else {
        reject( new Error("Meeting already schedule"))
    }
})

const addToCalender = (meetingDetails) => {
  
    const calender = `${meetingDetails.name} has been schedule on ${meetingDetails.location} at ${meetingDetails.time}`
    return  Promise.resolve(calender)
}



async function friendlyFunction() { 
    try {
        const meetingDetails = await meeting
        const calender = await addToCalender (meetingDetails )
        console.log(calender)
         } catch {
             console.log(`Some thing wrong`)
         }


}

console.log(friendlyFunction())
