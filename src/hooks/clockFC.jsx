import React, { useEffect, useState } from "react";

const ClockFC = () => {
    const initialDate = {
        fecha: new Date(),
        edad: 0,
        nombre: "‘Martín’",
        apellidos: "‘San José’",
    };

    const [age, setAge] = useState(initialDate.edad);

    const increaseAge = () => {
        setAge(age + 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            increaseAge();
        }, 1000);
        return () => clearInterval(interval);
    });

    return (
        <div>
            <h2>
                Hora Actual:
                {initialDate.fecha.toLocaleTimeString()}
            </h2>
            <h3>
                {initialDate.nombre} {initialDate.apellidos}
            </h3>
            <h1>Edad: {age}</h1>
        </div>
    );
};

export default ClockFC;
