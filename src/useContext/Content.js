import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

export default function Content() {

    // Retrieve context data
    const theme = useContext(ThemeContext);

    return (
        <p className = {theme.theme}>
            Đỗ Công Sơn
        </p>
    )
}
