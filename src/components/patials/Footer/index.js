import React from 'react'

export default function Footer() {
  return (
    <div style={{ 
        width: '100%', 
        height:'var(--header-height)', 
        overflow: 'hidden',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        fontStyle: 'oblique',
        boxShadow: '0 -1px 2px rgba(0, 0, 0, 0.5)'
        }}>
        <p style={{
            fontSize: '2.5rem'
        }}>©Designed by Thanh Đặng</p>
    </div>
  )
}
