"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const TicketUpdate = () => {
    const router = useRouter();
    const [redirect, setRedirect] = useState(false); 
    const [dataForm, setDataForm] = useState({
        subject: "",
        description: "",
        urgency: "1",
        status: "Not Started",
        category: "Feature Request",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataForm((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSliderChange = (e) => {
        const value = parseInt(e.target.value, 10); 
        setDataForm((prevState) => ({
            ...prevState,
            urgency: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const res = await fetch("/api/tickets", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataForm),
            });

            if (!res.ok) {
                throw new Error("Failed to Submit Ticket");
            }

            // Set redirect state to true after successful API call
            setRedirect(true);
        } catch (error) {
            console.error("Error submitting ticket:", error);
            // Optionally, set an error state to display an error message
        }
    };

    const getPriorityLabel = (urgency) => {
        switch (urgency) {
            case 1:
                return "Non-Priority";
            case 2:
                return "Standard";
            case 3:
                return "High Priority";
            case 4:
                return "Mission Critical";
            default:
                return "";
        }
    };

    const getPriorityColor = (urgency) => {
        switch (urgency) {
            case 1:
                return "text-green-500"; 
            case 2:
                return "text-yellow-500";
            case 3:
                return "text-orange-500";
            case 4:
                return "text-red-500";
            default:
                return "";
        }
    };

    const getPriorityColorClass = (urgency) => {
        switch (urgency) {
            case 1:
                return "bg-green-500";
            case 2:
                return "bg-yellow-500";
            case 3:
                return "bg-orange-500";
            case 4:
                return "bg-red-500";
            default:
                return "";
        }
    };

    useEffect(() => {
        if (redirect) {
            router.push("/success-page"); 
        }
    }, [redirect, router]);

    return (
        <div className="flex justify-center"> 
            <form
                className="flex flex-col justify-center gap-4 w-1/2"
                method="post"
                onSubmit={handleSubmit}
            >
                <h3 className="text-2xl font-bold mb-4">Submit Your Ticket</h3>

                <label htmlFor="subject" className="font-semibold">Subject:</label>
                <input
                    id="subject"
                    name="subject"
                    type="text"
                    onChange={handleChange}
                    required
                    value={dataForm.subject}
                    className="border p-2 rounded"
                />

                <label htmlFor="description" className="font-semibold">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    onChange={handleChange}
                    required
                    rows="6" 
                    value={dataForm.description}
                    className="border p-2 rounded"
                />

                <label htmlFor="category" className="font-semibold">Category:</label>
                <select
                    id="category"
                    name="category"
                    value={dataForm.category}
                    onChange={handleChange}
                    className="border p-2 rounded"
                >
                    <option value="Hardware Issue">Hardware Issue</option>
                    <option value="Software Issue">Software Issue</option>
                    <option value="Feature Request">Feature Request</option>
                    <option value="Bug Report">Bug Report</option>
                    <option value="HRL/Loaner Request">HRL/Loaner Request</option>
                    <option value="Other">Other</option>
                </select>

                <label htmlFor="urgency" className="font-semibold">Priority:</label>
                <input
                    type="range"
                    id="urgency"
                    name="urgency"
                    min="1"
                    max="4"
                    value={dataForm.urgency}
                    onChange={handleSliderChange}
                    className={`slider ${getPriorityColorClass(dataForm.urgency)}`} 
                />
                <span className={`ml-2 ${getPriorityColor(dataForm.urgency)}`}>
                    {getPriorityLabel(dataForm.urgency)}
                </span>

                <label htmlFor="status" className="font-semibold">Status:</label>
                <select
                    id="status"
                    name="status"
                    value={dataForm.status}
                    onChange={handleChange}
                    className="border p-2 rounded"
                >
                    <option value="Not Started">Received/Not Started</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Resolved">Resolved</option>
                </select>

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Submit Ticket
                </button>
            </form> 
        </div>
    );
};

export default TicketUpdate;
