import React, { useEffect, useState } from 'react'

import Pagination from '@mui/material/Pagination'
import { Stack, Box, Typography } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
const Exercises = ({ exercises, setExercises, bodyPart }) => {
  console.log(exercises);
  const [currentPage, setCurrentPage]=useState(1);
  const exercisesPerPage = 9;
  const paginate =(e, value) =>{
  setCurrentPage(value);
  window.scrollTo({top:1800, behavior:'smooth'})
  }
  return (
    <Box id="exercises"
      sx={{ mt: { lg: '110px' } }}
      mt="50px"
      p="20px">
      <Typography variant='h2' mb="46px">Show  Results</Typography>
      <Stack direction="row" sx={{ gap: { lg: '110px', xm: '50px' } }}
        flexWrap="wrap" justifyContent="center">
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        )

        )}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>

    </Box>
  )
}

export default Exercises