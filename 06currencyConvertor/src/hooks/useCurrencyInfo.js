import React, {useState, useEffect} from 'react'

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
                const newData = await response.json();
                setData(newData[currency]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, [currency]);

    return data;
}

export default useCurrencyInfo
