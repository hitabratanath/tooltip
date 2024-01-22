import {clsx} from 'clsx';
import './tooltip.css';

const Tooltip = ({
  text,
  direction = 'top',
  children,
  showTooltip = true,
  ...props
}) => {
  return (
    <div
      data-tooltip={text}
      className={clsx(
        'avatar',
        { directiontop: direction === 'top' },
        { directiondown: direction === 'bottom' },
        { disabled: showTooltip === false }
      )}
      {...props}
    >
      {children}
    </div>
  );
};
export default Tooltip;
