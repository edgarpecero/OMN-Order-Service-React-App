export const formatToPrice = (value?: number | string): string => {
  // Display the price with the "$" symbol added.
  // Use as valueFormatter function for DataGrid.

  if (value === '') return '';

  // Format value as price: "$" + {price with 2 decimal places}
  // (e.g., "$123.45")
  const numValue = typeof value === 'string' ? parseFloat(value) : Number(value) || 0;

  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(numValue);
};