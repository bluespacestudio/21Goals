export const Input = ({ 
  label,
  error,
  icon: Icon,
  className = '',
  containerClassName = '',
  ...props 
}) => {
  const inputClasses = `
    w-full border rounded-lg py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors
    ${Icon ? 'pl-10 pr-3' : 'px-3'}
    ${error ? 'border-tertiary-500' : 'border-gray-300'}
    ${className}
  `.trim().replace(/\s+/g, ' ')

  return (
    <div className={containerClassName}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        )}
        <input className={inputClasses} {...props} />
      </div>
      {error && (
        <p className="mt-1 text-sm text-tertiary-600">{error}</p>
      )}
    </div>
  )
}

export const Select = ({ 
  label,
  error,
  options = [],
  className = '',
  containerClassName = '',
  ...props 
}) => {
  const selectClasses = `
    w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors bg-white
    ${error ? 'border-tertiary-500' : 'border-gray-300'}
    ${className}
  `.trim().replace(/\s+/g, ' ')

  return (
    <div className={containerClassName}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <select className={selectClasses} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-tertiary-600">{error}</p>
      )}
    </div>
  )
} 