import React, { useState } from "react";


const FormsView = () => {

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        image: "",
        category: "",
        rating: 0
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })

    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formData, '<--------------')
    }

    return (
        <div className="padding-view">
            <p>Form Data</p>

            <form>
                <input name="title" type="text" value={formData.title} onChange={handleChange} placeholder="Name" />
                <br /><br />
                <textarea name="description" type="textarea" value={formData.description} onChange={handleChange} placeholder="description" />
                <br /><br />
                <input name="image" type="text" value={formData.image} onChange={handleChange} placeholder="image" />
                <br /><br />
                <input name="category" type="text" value={formData.category} onChange={handleChange} placeholder="category" />
                <br /><br />
                <input name="rating" type="number" value={formData.rating} onChange={handleChange} placeholder="rating" />
                <br /><br />

                <button type="submit" onClick={onSubmit} > Click </button>
            </form>
        </div>
    )
}

export default FormsView;