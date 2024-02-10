export default function formatMoney(amount = 0) {
  let minimumFractionDigits = 2;

  if (amount % 100 === 0) {
    minimumFractionDigits = 0;
  }

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits,
  });

  return formatter.format(amount / 100);
}
