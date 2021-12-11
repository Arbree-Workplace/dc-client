import * as React from "react"

function ShowProfile(props) {
    return (
        <React.Fragment>
            {props.profileData.noprofile ?
                <div>
                    You don't have a profile yet! </div> : (
                    <div className="w-max flex flex-col gap-2">
                        <header
                            className="text-center py-2 rounded bg-indigo-700 text-white shadow shadow-indigo-400">
                            Your Profile</header>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row gap-2">
                                <div>
                                    Handle :</div>
                                <div>{props.profileData.handle}</div></div>
                            <div className="flex flex-row gap-2">
                                <div>
                                    Company :</div>
                                <div>{props.profileData.company}</div></div>
                            <div className="flex flex-row gap-2">
                                <div>
                                    Website :</div>
                                <div>{props.profileData.website}</div></div>
                            <div className="flex flex-row gap-2">
                                <div>
                                    Location :</div>
                                <div>{props.profileData.location}</div></div>
                            <div className="flex flex-col gap-2">
                                <div>
                                    Bio</div>
                                <div className="px-2 py-1 rounded border-2">
                                    {props.profileData.bio}</div></div>
                            <div className="flex flex-row gap-2">
                                <div>
                                    Status :</div>
                                <div>
                                    {props.profileData.status}</div></div>
                            <div className="flex flex-row gap-2">
                                <div>
                                    Skills :</div>
                                <div>
                                    {props.profileData.skills}</div></div>
                            <div className="flex flex-row gap-2">
                                <div>
                                    Education :</div>
                                <div>
                                    {props.profileData.education}</div></div>
                            <div className="flex flex-row gap-2">
                                <div>
                                    Experience :</div>
                                <div>
                                    {props.profileData.experience}</div></div></div></div>)}</React.Fragment>
    )
}

export default ShowProfile