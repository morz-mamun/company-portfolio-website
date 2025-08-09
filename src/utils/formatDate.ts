export const formatDate = (mongoDate: string) => {
  // mongoDate can be a Date object or a string from MongoDB
  const date = new Date(mongoDate);

  // Options for formatting
  const options = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  } as Intl.DateTimeFormatOptions;

  // Convert and format
  return date.toLocaleDateString('en-US', options);
};
