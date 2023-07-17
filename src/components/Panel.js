import combineClassNames from 'classnames';

function Panel({ children, className, ...rest }) {
  const finalClassNames = combineClassNames(
    'border rounded p-3 shadow bg-white w-full',
    className
  );

  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}

export default Panel;
