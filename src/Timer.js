import React, {useState, useEffect} from 'react';


const countTime = (deadline) => {
    var now = new Date().getTime()
    let t = deadline.getTime() - now
    let Time = {}
    Time = {
        date: Math.floor(t / (1000 * 60 * 60 * 24)),
        hours: Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)),
        message: "Before"
    }
    if (t < 0) {
        Time = {
            date: Time.date * -1,
            hours: Time.hours * -1,
            minutes: Time.minutes * -1,
            message: "After"
        }
    }
    return Time

}

function Timer(time) {
    const [deadline, setDeadline] = useState(new Date());
    deadline.setFullYear(time.time.years)
    deadline.setMonth(time.time.months - 1)
    deadline.setDate(time.time.date)
    deadline.setHours(time.time.hours)
    deadline.setMinutes(time.time.minutes)
    const [Time, setTime] = useState(countTime(deadline));
    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(countTime(deadline));
        }, 1000);
    });

    return (
        <table id="timer" >
            <caption><h2 className="u-text u-text-1">{Time.message} start</h2></caption>
            <tr>
                <td><h1>{Time.date}</h1></td>
                <td><h1>{Time.hours}</h1></td>
                <td><h1>{Time.minutes}</h1></td>
            </tr>
            <tr>
                <td>Days</td>
                <td>Hours</td>
                <td>Minutes</td>
            </tr>
        </table>
    )
}


export default Timer;
