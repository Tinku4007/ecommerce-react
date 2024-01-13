import { Snackbar } from '@mui/material'
import React from 'react'

const Toaster = ({ open, onClose, message, vertical = 'top', horizontal = 'center' }) => {
    return (
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={onClose}
            message={message}
            autoHideDuration={3000}
            key={`${vertical}-${horizontal}`}
        />
    )
}

export default Toaster