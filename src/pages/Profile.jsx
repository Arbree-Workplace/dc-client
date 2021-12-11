import * as React from "react"
import useFetchGet from "../hooks/useFetchGet"
import ShowProfile from '../components/Profiles/ShowProfile'
import ModProfile from "../components/Profiles/ModProfile"
import MakePost from "../components/Posts/MakePost"

function Profile() {
    const [profileData, setProfileData] = React.useState({})

    React.useEffect(async () => {
        const data = await useFetchGet('profile')
        setProfileData(data)
    }, [])

    return (
        <div className="flex flex-row justify-around">
            <div className="flex flex-col gap-10">
                <ShowProfile profileData={profileData} />
                <MakePost />
            </div>
            <ModProfile setProfileData={setProfileData} />
        </div>
    )
}

export default Profile