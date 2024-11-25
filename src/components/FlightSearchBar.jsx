import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  MenuItem,
  Checkbox,
  FormControl,
  Select,
  TextField,
} from '@mui/material';
import { LocationOn, CalendarToday } from '@mui/icons-material';

const FlightSearchBar = () => {
  const [tripType, setTripType] = useState('roundTrip');
  const [classType, setClassType] = useState('Economy');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleClassChange = (event) => {
    setClassType(event.target.value);
  };

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        borderRadius: '6px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        p: 3,
        maxWidth: 1300,
        mx: 'auto',
      }}
    >
      {/* Radio Buttons for Trip Type */}
      <div className="mb-2 flex items-center gap-2">
        <RadioGroup
          row
          value={tripType}
          onChange={(e) => setTripType(e.target.value)}
        >
          <FormControlLabel
            value="roundTrip"
            control={<Radio />}
            label={
              <Typography
                variant="body1"
                sx={{
                  color: tripType === 'roundTrip' ? '#1255AE' : 'black',
                }}
              >
                Round Trip
              </Typography>
            }
          />
          <FormControlLabel
            value="oneWay"
            control={<Radio />}
            label={
              <Typography
                variant="body1"
                sx={{
                  color: tripType === 'oneWay' ? '#1255AE' : 'black',
                }}
              >
                One Way
              </Typography>
            }
          />
        </RadioGroup>

        {/* Class Dropdown */}
        <FormControl fullWidth variant="standard" sx={{ maxWidth: 120 }}>
          <Select
            value={classType}
            onChange={handleClassChange}
            sx={{
              backgroundColor: 'transparent',
              fontSize: '1rem',
              fontWeight: '500',
              color: '#1255AE',
            }}
          >
            <MenuItem value="Economy">Economy</MenuItem>
            <MenuItem value="Business">Business</MenuItem>
            <MenuItem value="First">First Class</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* Input Fields */}
      <div className="flex flex-nowrap items-center justify-between gap-3">
        <div className="flex items-center rounded-md border border-gray-300 px-4">
          <LocationOn color="action" />
          <input
            type="text"
            placeholder="From?"
            className="h-16 w-36 p-2 text-lg text-black focus:outline-none"
          />
        </div>
        <div className="flex items-center rounded-md border border-gray-300 px-4">
          <LocationOn color="action" />
          <input
            type="text"
            placeholder="To?"
            className="h-16 w-36 p-2 text-lg text-black focus:outline-none"
          />
        </div>
        <div className="flex items-center rounded-md border border-gray-300 px-4">
          <CalendarToday color="action" />
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="h-16 w-36 p-2 text-lg text-black focus:outline-none"
          />
        </div>
        {tripType === 'roundTrip' && (
          <div className="flex items-center rounded-md border border-gray-300 px-4">
            <CalendarToday color="action" />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="h-16 w-36 p-2 text-lg text-black focus:outline-none"
            />
          </div>
        )}
        <TextField
          placeholder="1 Traveler"
          variant="outlined"
          size="medium"
          sx={{
            width: '120px',
          }}
        />
        <Button
          variant="contained"
          sx={{
            padding: 2,
            backgroundColor: '#FCB300',
            color: 'black',
            '&:hover': {
              backgroundColor: '#FFA500',
            },
          }}
        >
          Search Flights
        </Button>
      </div>

      {/* Direct Flights Checkbox */}
      <div className="mt-2 flex items-center">
        <FormControlLabel
          control={<Checkbox />}
          label={
            <Typography variant="body2" sx={{ color: 'gray' }}>
              Direct Flights
            </Typography>
          }
        />
      </div>
    </Box>
  );
};

export default FlightSearchBar;
