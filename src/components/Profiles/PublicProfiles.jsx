import * as React from "react"
import useFetchGet from "../../hooks/useFetchGet"

function PublicProfiles() {
    const [profiles, setProfiles] = React.useState([{}])

    React.useEffect(async () => {
        const data = await useFetchGet('profile/all')
        setProfiles(data)
    }, [])

    return (
        <div className="w-fit grid grid-cols-3 gap-6 mx-auto">
            {profiles.map((profile, idx) => (
                <div key={idx} className="each-profile flex flex-col gap-4">
                    <header className="text-center py-2 rounded bg-blue-600 text-white shadow shadow-sky-700">
                        {profile.handle}'s Profile</header>
                    <div className="profile-details">
                        <div className="flex flex-row gap-2">
                            <div>
                                Handle :</div>
                            <div>{profile.handle}</div></div>
                        <div className="flex flex-row gap-2">
                            <div>
                                Company :</div>
                            <div>{profile.company}</div></div>
                        <div className="flex flex-row gap-2">
                            <div>
                                Website :</div>
                            <div>{profile.website}</div></div>
                        <div className="flex flex-row gap-2">
                            <div>
                                Location :</div>
                            <div>{profile.location}</div></div>
                        <div className="flex flex-col gap-2">
                            <div>
                                Bio</div>
                            <div className="px-2 py-1 rounded border-2">
                                {profile.bio}</div></div>
                        <div className="flex flex-row gap-2">
                            <div>
                                Status :</div>
                            <div>
                                {profile.status}</div></div>
                        <div className="flex flex-row gap-2">
                            <div>
                                Skills :</div>
                            <div>
                                {profile.skills}</div>
                        </div>
                        <div className="flex flex-row gap-2">
                            <div>
                                Education :</div>
                            <div>
                                {profile.education}</div></div>
                        <div className="flex flex-row gap-2">
                            <div>
                                Experience :</div>
                            <div>
                                {profile.experience}</div></div></div></div>))}</div>
    )
}

export default PublicProfiles