import { FC } from 'react';
import Tooltip from './components/Tooltip';

import './style.css';

const TOOLTIP_CONTENT = 'Thinking Cat';

export const App: FC<{ name: string }> = ({ name }) => {
  const active = false;
  const handleClick = () => {
    console.log('clicked !!!');
  };

  return (
    <div className="wrapper">
      <Tooltip text={TOOLTIP_CONTENT} direction="bottom" showTooltip={!active}>
        <button onClick={handleClick} disabled={!active}>
          Click
        </button>
      </Tooltip>
    </div>
  );
};
