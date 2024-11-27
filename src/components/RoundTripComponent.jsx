import { LocationOn } from '@mui/icons-material';
import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import React, { useState } from 'react'; // Import useState
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import styles
import VisitorCount from './VisitorCount';

const RoundTripComponent = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div>
      <div className="my-3 flex flex-col gap-2 lg:flex-row">
        <div className="flex gap-2">
          <div className="flex flex-1 items-center rounded-[7px] border border-gray-500 px-4 lg:w-5/12">
            <LocationOn color="action" />
            <input
              type="text"
              placeholder="From?"
              className="h-16 w-full p-2 text-lg text-black focus:outline-none"
            />
          </div>
          <div className="flex flex-1 items-center rounded-[7px] border border-gray-500 px-4 lg:w-5/12">
            <LocationOn color="action" />
            <input
              type="text"
              placeholder="To?"
              className="h-16 w-full p-2 text-lg text-black focus:outline-none"
            />
          </div>
        </div>

        <div className="flex gap-2">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Start Date"
            dateFormat="yyyy/MM/dd"
            className="h-[72px] w-full rounded-[7px] border border-gray-500 p-2 text-lg text-black focus:outline-none"
          />

          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText="End Date"
            dateFormat="yyyy/MM/dd"
            className="h-[72px] w-full rounded-[7px] border border-gray-500 p-2 text-lg text-black focus:outline-none"
          />

          <div className="">
            <VisitorCount />
          </div>

          <button className="h-[72px] w-full whitespace-nowrap rounded-[7px] bg-[#FCB300] px-4 text-xl font-bold text-black hover:bg-[#FFA500]">
            Search Flights
          </button>
        </div>
      </div>

      {/* Direct Flights Checkbox */}
      <div className="flex items-center">
        <FormControlLabel
          control={<Checkbox />}
          label={
            <Typography variant="body2" sx={{ color: 'gray' }}>
              <p className="text-base text-gray-600"> Direct Flights</p>
            </Typography>
          }
        />
      </div>
    </div>
  );
};

export default RoundTripComponent;
