import React from 'react';

export const MainContent = ({ children }) => {
  return (
    <div style={styles.mainContentWrapper}>
      { children }
    </div>
  )
};

const styles = {
  mainContentWrapper: {
    margin: '0px 10%',
    textAlign: 'center',
  }
}