import React, { useState, useEffect } from 'react';
import { DateTimePicker as MantineDatePicker } from '@mantine/dates';
import { Select } from '@mantine/core'; // Import Select for service selection
import { useMutation, useQuery } from '@apollo/client'; // Import useQuery
import { ADD_ORDER, GET_BOOKED_TIMES } from '../utils/mutations';

function BookService() {
    const [value, setValue] = useState(null); 
    const [service, setService] = useState(null); 
    const [bookedTimes, setBookedTimes] = useState([]);
    const [addOrder] = useMutation(ADD_ORDER);

    const { data, loading, error, refetch } = useQuery(GET_BOOKED_TIMES, {
        variables: { service, date: value ? value.toISOString().split('T')[0] : null },
        skip: !service || !value,
    });

    useEffect(() => {
        if (data && data.getBookedTimes) {
            setBookedTimes(data.getBookedTimes);
        }
    }, [data]); // Corrected closing bracket

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (service && value) {
            try {
                await addOrder({
                    variables: { service, date: value },
                });
                // Optionally reset the form or handle success
            } catch (error) {
                console.error("Error adding order: ", error);
            }
        }
    };

    const isTimeBooked = (time) => {
        return bookedTimes.some((booked) => booked === time.toISOString()); // Corrected arrow function syntax
    }

    return (
        <form onSubmit={handleSubmit}>
            <Select
                label="Select Service"
                placeholder="Choose a service"
                data={[
                    { value: 'service1', label: 'Integrative Healing Session - 75 min' },
                    { value: 'service2', label: 'Chi Ne Sang Massage - 60 min' },
                    { value: 'service3', label: 'Integrative Healing Session - 90 min' },
                    { value: 'service4', label: 'Abhyanga Massage - 60 min' },
                    { value: 'service5', label: 'Integrative Healing Session - 120 min' },
                    // Add more services as needed
                ]}
                onChange={setService}
            />
            <MantineDatePicker
                value={value}
                onChange={setValue}
                placeholder="Pick date"
                label="Select date"
                disableDate={(date) => isTimeBooked(date)}
            />
            <button type="submit" disabled={!service || !value || isTimeBooked(value)}>Book Service</button>
        </form>
    );
}

export default BookService;