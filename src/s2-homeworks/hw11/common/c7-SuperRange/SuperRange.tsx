import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                width: '300px',
                height: '5px',
                color: '#00CC22',
                '& .MuiSlider-rail': {
                    backgroundColor: '#8B8B8B',
                    opacity: 1
                    // стили для слайдера // пишет студент
                },

            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
