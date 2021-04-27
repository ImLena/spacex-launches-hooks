import React from 'react';
import Timer from "./Timer";

function Launch({mission}) {
    if (mission.launch.minutes == null) {
        return (
            <div className="launch-div">
                <div className="launch-div-child">
                    <div>
                        <h2 className="u-text">{mission.mission}</h2>
                        <p className="u-text">
                                Vehicle: {mission.vehicle}<br/>
                                Location: {mission.location}<br/>
                                Launch: {mission.launch.years}

                        </p></div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="launch-div">
                <div className="launch-div-child">
                    <div>
                        <h2 className="u-text">{mission.mission}</h2>
                        <p className="u-text">
                            Vehicle: {mission.vehicle}<br/>
                            Location: {mission.location}<br/>
                            Launch: {mission.launch.date}.{mission.launch.months}.{mission.launch.years} at {mission.launch.hours} hours {mission.launch.minutes} minutes
                        </p>

                    </div>
                    <div>
                        <Timer time={mission.launch}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Launch;
