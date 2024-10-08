// utils.js

/**
 * Converts a given amount to PKR (Pakistani Rupees) format.
 * 
 * @param {number} amount - The amount to be converted to PKR.
 * @returns {string} - The formatted PKR amount with commas.
 */
export const convertToPKR = (amount) => {
    if (isNaN(amount)) return '0';
    
    // Format the number to PKR format with commas
    return amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  