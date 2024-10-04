import React, { useState } from 'react';
import { DatePicker as MantineDatePicker } from '@mantine/dates';
import { Select } from '@mantine/core'; // Import Select for service selection
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../utils/mutations';

function BookService() {
    const [value, setValue] = useState(null); 
    const [service, setService] = useState(null); 
    const [addOrder] = useMutation(ADD_ORDER);

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

    return (
        <form onSubmit={handleSubmit}>
            <Select
                label="Select Service"
                placeholder="Choose a service"
                data={[
                    { value: 'service1', label: 'Service 1' },
                    { value: 'service2', label: 'Service 2' },
                    { value: 'service3', label: 'Service 3' },
                    { value: 'service4', label: 'Service 4' },
                    { value: 'service5', label: 'Service 5' },
                    { value: 'service6', label: 'Service 6' },
                    // Add more services as needed
                ]}
                onChange={setService}
            />
            <MantineDatePicker
                value={value}
                onChange={setValue}
                placeholder="Pick date"
                label="Select date"
            />
            <button type="submit">Book Service</button>
        </form>
    );
}

export default BookService;