import React, { useEffect, useState } from "react";
import { getUserData, refreshToken } from "../../utils/api";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("access_token");
        const refresh = localStorage.getItem("refresh_token");

        if (!token || !refresh) {
            navigate("/login");
        } else {
            getUserData(token)
                .then(response => {
                    setUser(response.data);
                    console.log(response.data);
                })
                .catch(async (error) => {
                    if (error.response && error.response.status === 401) {
                        try {
                            const response = await refreshToken(refresh);
                            localStorage.setItem("access_token", response.data.access);
                            getUserData(response.data.access)
                                .then(response => setUser(response.data))
                                .catch(() => navigate("/login"));
                        } catch (refreshError) {
                            navigate("/login");
                        }
                    } else {
                        navigate("/login");
                    }
                });
        }
    }, [navigate]);

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div className="p-4 bg-gray-900 text-white">
            <h2 className="text-2xl font-bold mb-4">Profile</h2>
            <div className="bg-gray-800 p-4 rounded shadow-md mb-4">
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>First Name:</strong> {user.first_name}</p>
                <p><strong>Last Name:</strong> {user.last_name}</p>
                <p><strong>Total Points:</strong> {user.total_points}</p>
            </div>
            <div className="bg-gray-800 p-4 rounded shadow-md">
                <h3 className="text-xl font-bold mb-2">Tasks Completed</h3>
                <ul className="list-disc list-inside">
                    {user.tasks_completed.map((task, index) => (
                        <li key={index} className="mb-4 flex justify-between items-center">
                            <div className="flex items-center">
                                {task.app.logo && <img src={`http://127.0.0.1:8000${task.app.logo}`} alt="App Logo" className="w-12 h-12 object-cover mr-4" />}
                                <div>
                                    <p><strong>App Name:</strong> {task.app.name}</p>
                                    <p><strong>Points:</strong> {task.app.points}</p>
                                </div>
                            </div>
                            <img src={`http://127.0.0.1:8000${task.screenshot}`} alt="Screenshot" className="w-32 h-32 object-cover" />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Profile;
