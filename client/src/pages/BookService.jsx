import React, { useState, useEffect } from "react";
import { DateTimePicker as MantineDatePicker } from "@mantine/dates";
import { Select } from "@mantine/core";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_SERVICE } from "../utils/mutations";
import { GET_BOOKED_TIMES } from "../utils/queries";

function BookService() {
  const [value, setValue] = useState(null);
  const [service, setService] = useState(null);
  const [bookedTimes, setBookedTimes] = useState([]);
  const [addService] = useMutation(ADD_SERVICE);

  const { data, loading, error } = useQuery(GET_BOOKED_TIMES, {
    variables: {
      service,
      date: value ? value.toISOString().split("T")[0] : "",
    },
    skip: !service || !value,
  });

  // Set booked times whenever new data is available
  useEffect(() => {
    if (data && data.getBookedTimes) {
      setBookedTimes(data.getBookedTimes);
    }
  }, [data]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (service && value) {
      try {
        console.log(service);
        
        console.log(isTimeBooked(value));
        await addService({
          variables: { serviceType: service, date: value.toISOString().split("T")[0], time: value   },
        });
      
        // Optionally handle success
      } catch (error) {
        console.error("Error adding order: ", error);
      }
    }
  };

  // Check if a time is booked based on start and end times
  const isTimeBooked = (time) => {
    if (!time) return false; // Ensure time is not null
    const selectedTimeISO = time.toISOString();
    return bookedTimes.some(({ startTime, endTime }) => {
      return selectedTimeISO >= startTime && selectedTimeISO <= endTime;
    });
  };

  // Handle loading and error states
  // if (loading) return <p>Loading available times...</p>;
  // if (error) return <p>Error fetching booked times: {error.message}</p>;

  return (
    <form onSubmit={handleSubmit}>
      <Select
        label="Select Service"
        placeholder="Choose a service"
        data={[
          {
            value: "serviceId1",
            label: "Integrative Healing Session - 75 min",
          },
          { value: "serviceId2", label: "Chi Ne Sang Massage - 60 min" },
          {
            value: "serviceId3",
            label: "Integrative Healing Session - 90 min",
          },
          { value: "serviceId4", label: "Abhyanga Massage - 60 min" },
          {
            value: "serviceId5",
            label: "Integrative Healing Session - 120 min",
          },
        ]}
        onChange={setService}
      />
      <MantineDatePicker
        value={value}
        onChange={setValue}
        placeholder="Pick date"
        label="Select date"
        disabledDates={bookedTimes.map(
          ({ startTime }) => new Date(startTime.split("T")[0])
        )} // Disable booked dates
      />
      <button
        type="submit"
        disabled={!service || !value || isTimeBooked(value)}
      >
        Book Service
      </button>
    </form>
  );
}

export default BookService;
