import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const VARIANTS = {
  primary: 'bg-primary text-white hover:brightness-105',
  secondary: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-800',
  ghost: 'bg-transparent text-primary hover:text-primary-light',
  link: 'text-white underline-offset-4 hover:underline'
};

const base = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-light/30';

export default function Button({ children, to, onClick, variant = 'primary', className = '', disabled = false, ...rest }) {
  const size = variant === 'primary' ? 'py-3 px-6 rounded-full shadow-md' : 'py-2 px-4 rounded-lg';
  const classes = `${base} ${size} ${VARIANTS[variant] || VARIANTS.primary} ${disabled ? 'opacity-70 cursor-not-allowed' : ''} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} aria-disabled={disabled} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'link']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
};
