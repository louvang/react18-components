import combineClassNames from 'classnames';
import { twMerge } from 'tailwind-merge';

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  let classes = combineClassNames(
    rest.className,
    'flex items-center px-3 py-1.5 border',
    {
      'border-blue-500 bg-blue-500 text-white': primary,
      'border-blue-400 bg-blue-400 text-white': secondary,
      'border-green-500 bg-green-500 text-white': success,
      'border-yellow-500 bg-yellow-500 text-white': warning,
      'border-red-500 bg-red-500 text-white': danger,
      'rounded-full': rounded,
      'bg-white': outline,
      'text-blue-500': outline && primary,
      'text-blue-400': outline && secondary,
      'text-green-500': outline && success,
      'text-yellow-400': outline && warning,
      'text-red-500': outline && danger,
    }
  );

  classes = twMerge(classes);

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error('Please only use one variation');
    }
  },
};

export default Button;
