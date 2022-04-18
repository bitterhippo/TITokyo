import React, { useState } from 'react';
import { Link } from 'react-router-dom'

export const NavBar = () => {

  const [highlighted, toggleHighlighted] = useState('');

  return (
    <div style={styles.navBarWrapper}>
      <div style={styles.navBarList}>
        <div
          onMouseEnter={() => toggleHighlighted('clock')}
          onMouseLeave={() => toggleHighlighted('')}
        >
          <Link
            to={"/clock"}
            style={{ ...styles.styledLink, textDecoration: highlighted === 'clock' ? 'underline' : 'none' }}>
            Clock
          </Link>
        </div>
        <div
          onMouseEnter={() => toggleHighlighted('schedule')}
          onMouseLeave={() => toggleHighlighted('')}
        >
          <Link
            to={"/scheduler"}
            style={{ ...styles.styledLink, textDecoration: highlighted === 'schedule' ? 'underline' : 'none' }}
          >
            Schedule
          </Link>
        </div>
      </div>
    </div>
  )
}

const styles = {
  navBarWrapper: {
    backgroundColor: '#9457EB',
  },
  styledLink: {
    color: 'white',
    fontSize: 20,
    textDecoration: 'none'
  },
  navBarList: {
    display: 'flex',
    flexDirection: 'row',
    gap: 50,
    marginLeft: 50,
    padding: '5px 0px',
  }
};