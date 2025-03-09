import React from "react";

function App() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#b6d7a8] p-4">
            <div className="flex flex-col items-center max-w-md text-center">
                <img
                    src="../src/assets/reb7e.png"
                    alt="Cartoon avocado character with a bowler hat and mustache, holding a cane"
                    className="w-64 h-64 mb-6"
                />
                <h1 className="text-2xl font-bold text-gray-800">
                    AgriTech
                </h1>
                <h2 className="text-2xl font-bold text-gray-800">
                    Avocado Tree Detection System
                </h2>
            </div>
        </div>
    );
}

export default App;
