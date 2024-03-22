

const NumberFormat = ({price}) => {
  return (
    Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR',maximumFractionDigits : 2 }).format(price)
  )
}

export default NumberFormat;