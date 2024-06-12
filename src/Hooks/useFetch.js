import { useEffect, useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((response) => response.json())
            .then((data => {
                const transformedData = transformData(data.data)
                console.log(transformedData);
                setData(transformedData)
            }))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);

    // Función para convertir las claves de un objeto de PascalCase a camelCase
    function toCamelCase(obj) {
        const newObj = {};
        Object.keys(obj).forEach((key) => {
            const newKey = key.charAt(0).toLowerCase() + key.slice(1);
            newObj[newKey] = obj[key];
        });
        return newObj;
    }

    // Función para transformar un array de objetos
    function transformData(data) {

        return Array.isArray(data) ? data.map(toCamelCase) : data;
    }

    return { data, loading, error };
}