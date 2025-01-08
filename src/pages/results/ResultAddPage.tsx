import React, { useState } from "react";

const ResultAddPage: React.FC = () => {
    const [forecastId, setForecastId] = useState<string>("");
    const [quantity, setQuantity] = useState<string>("");
    const [unit, setUnit] = useState<string>("yen");
    const [name, setName] = useState<string>("namname");

    const [errorMessages, setErrorMessages] = useState<string[]>(["error"]); // 오류 메시지를 저장할 상태 추가

    const handleForecastIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForecastId(e.target.value);
    };
    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(e.target.value);
    };

    const click = async () => {
        const requestData = { forecastId, quantity, unit, name };

        try {
            const res = await fetch("http://localhost:8080/api/result/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData),
            });


            //TODO: refactor this code
            console.log(JSON.stringify(requestData));
            console.log(res);
            if (!res.ok) {
                const errorData = await res.json();
                console.log(errorData)

                setErrorMessages([...errorData]);

                return; 
            }

            setErrorMessages([]);
            const result = await res.json();
            console.log(result);
            alert("Result created successfully!");
        } catch (error) {
            console.error("Error:", error);
            setErrorMessages(["An unexpected error occurred. Please try again."]);
        }
    };

    return (
        <div>
            <h1>Result Add Page</h1>

            <input
                type="text"
                name="forecastId"
                value={forecastId}
                onChange={handleForecastIdChange}
                placeholder="Forecast ID"
            />
            <input
                type="text"
                name="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                placeholder="Quantity"
            />

            <button onClick={click}>Submit</button>

            {errorMessages.length > 0 && (
                <div style={{ color: "red", marginTop: "10px" }}>
                    <h3>Errors:</h3>
                    <ul>
                        {errorMessages.map((error, index) => (
                            <li key={index}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ResultAddPage;
