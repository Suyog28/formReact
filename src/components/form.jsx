import { useState } from "react"
import { useId } from "react"

export default function Form() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        isAge: true,
        employment: "",
        comment: "",
        color: ""
    })

    const id = useId()

    function handleChange(event) {
        const { name, type, checked, value } = event.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }


    function FormSubmitData(event) {
        event.preventDefault()
        console.log(formData)
    }


    return (
        <div>
            <form onSubmit={FormSubmitData}>
                <label htmlFor={id + "firstName"} >First Name:   </label>
                <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    id={id + "firstName"}
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <label htmlFor={id + "lastName"}>Last Name: </label>
                <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    id={id + "lastName"}
                    value={formData.lastName}
                    onChange={handleChange}
                />
                <label htmlFor={id + "email"}>Email: </label>
                <input
                    type="email"
                    placeholder="xyz@something.com"
                    name="email"
                    id={id + "email"}
                    value={formData.email}
                    onChange={handleChange}
                />
                <br /> <br />
                <input
                    type="checkbox"
                    checked={formData.isAge}
                    name="isAge"
                    id={id + "checkbox"}
                    onChange={handleChange}

                />
                <label htmlFor={id + "checkbox"}>Are you 18+ ?</label>
                <br /> <br />
                <fieldset>
                    <legend>Current employment status</legend>
                    <input
                        type="radio"
                        id="unemployed"
                        name="employment"
                        value="unemployed"
                        checked={formData.employment === "unemployed"}
                        onChange={handleChange}
                    />
                    <label htmlFor="unemployed">Unemployed</label>
                    <br />

                    <input
                        type="radio"
                        id="part-time"
                        name="employment"
                        value="part-time"
                        checked={formData.employment === "part-time"}
                        onChange={handleChange}
                    />
                    <label htmlFor="part-time">Part-time</label>
                    <br />

                    <input
                        type="radio"
                        id="full-time"
                        name="employment"
                        value="full-time"
                        checked={formData.employment === "full-time"}
                        onChange={handleChange}
                    />
                    <label htmlFor="full-time">Full-time</label>
                    <br />
                </fieldset>
                <br /> <br />
                <label htmlFor={id + "comment"}>Comment: </label>
                <textarea
                    id={id + "comment"}
                    name="comment"
                    placeholder="comment"
                    value={formData.comment}
                    onChange={handleChange}
                ></textarea>
                <br /> <br />
                <label htmlFor={id + "color"}>Color</label>
                <select
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                    id={id + "color"}
                >
                    <option value="green">Green</option>
                    <option value="Blue">Blue</option>
                    <option value="Orange">Orange</option>
                </select>
                <br />
                <button>Submit</button>
            </form >
        </div>
    )
}