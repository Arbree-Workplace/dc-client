import * as React from "react"
import useFetchPost from "../../hooks/useFetchPost"

function ModProfile(props) {
    const [profileDataInput, setProfileDataInput] = React.useState({})

    const handleProfileDataInputChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setProfileDataInput((values) => ({ ...values, [name]: value }))
    }

    const handleCreateOrUpdateProfile = async (event) => {
        event.preventDefault()
        const payload = profileDataInput
        const data = await useFetchPost('profile', payload)
        props.setProfileData(data)
    }

    return (
        <div>
            <form
                className="profile-create-or-update flex flex-col gap-3 p-2 rounded border-2 border-emerald-700 shadow shadow-emerald-400"
                onSubmit={(event) => handleCreateOrUpdateProfile(event)}>
                <header className="text-center py-2 rounded bg-teal-700 text-white shadow shadow-teal-400">
                    Create Or Update Profile</header>
                <input
                    type="text"
                    name="handle"
                    value={profileDataInput.handle || ''}
                    placeholder="Handle"
                    className="px-2 py-1 border-b-2"
                    onChange={(event) => handleProfileDataInputChange(event)} />
                <input
                    type="text"
                    name="company"
                    value={profileDataInput.company || ''}
                    placeholder="Company"
                    className="px-2 py-1 border-b-2"
                    onChange={(event) => handleProfileDataInputChange(event)} />
                <input
                    type="url"
                    name="website"
                    value={profileDataInput.website || ''}
                    placeholder="Website"
                    className="px-2 py-1 border-b-2"
                    onChange={(event) => handleProfileDataInputChange(event)} />
                <input
                    type="text"
                    name="location"
                    value={profileDataInput.location || ''}
                    placeholder="Location"
                    className="px-2 py-1 border-b-2"
                    onChange={(event) => handleProfileDataInputChange(event)} />
                <input
                    type="text"
                    name="bio"
                    value={profileDataInput.bio || ''}
                    placeholder="Bio"
                    className="px-2 py-1 border-b-2"
                    onChange={(event) => handleProfileDataInputChange(event)} />
                <input
                    type="text"
                    name="status"
                    value={profileDataInput.status || ''}
                    placeholder="Status"
                    className="px-2 py-1 border-b-2"
                    onChange={(event) => handleProfileDataInputChange(event)} />
                <input
                    type="text"
                    name="skills"
                    value={profileDataInput.skills || ''}
                    placeholder="Skills"
                    className="px-2 py-1 border-b-2"
                    onChange={(event) => handleProfileDataInputChange(event)} />
                <button
                    className="px-2 py-2 rounded bg-cyan-700 text-white cursor-pointer shadow shadow-sky-400">
                    Submit</button></form></div>
    )
}

export default ModProfile