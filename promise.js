const meeting = new Promise((resolve, reject) =>{
    if (1) {
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

meeting.then(addToCalender)
.then((result) =>{
    console.log(result)
}).catch((error) =>{
console.log(error)
})