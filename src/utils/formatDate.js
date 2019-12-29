function formatDate(date) {
  const createdAt = new Date(date);
  return createdAt.toLocaleDateString('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export default formatDate;
