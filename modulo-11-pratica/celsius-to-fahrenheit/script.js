console.log("celsius to fahrenheit and fahrenheit to celsius");

function convertToCelsiusAndFahrenheit(degree) {
    const getCelsius = degree.toUpperCase().includes("°C");
    const getFahrenheit = degree.toUpperCase().includes("°F");

    if (!getCelsius && !getFahrenheit) {
        throw new Error("Entrada inválida");
    }
    let updatedDegree;
    let formula;
    let degreeSign;

    if (getCelsius) {
        updatedDegree = Number(degree.replace("°C", ""));
        formula = (celsius) => celsius * (9 / 5) + 32;
        degreeSign = "°F";
    }
    if (getFahrenheit) {
        updatedDegree = Number(degree.replace("°F", ""));
        formula = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
        degreeSign = "°C";
    }

    return formula(updatedDegree) + degreeSign;
}

try {
    console.log("10°C -> " + convertToCelsiusAndFahrenheit("10°C"));
    console.log("50°F -> " + convertToCelsiusAndFahrenheit("50°F"));
    console.log("37°C -> " + convertToCelsiusAndFahrenheit("37°C"));
    console.log("37°F -> " + convertToCelsiusAndFahrenheit("37°F"));
    console.log("37°F -> " + convertToCelsiusAndFahrenheit("re"));
} catch (error) {
    console.log(error);
}
