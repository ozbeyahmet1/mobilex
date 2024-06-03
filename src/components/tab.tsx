import * as React from 'react';
import CircularProgressBar from './circularProgressBar';

/**
 * Props for the Tab component.
 */
export interface TabProps {
  selected: boolean; // Indicates whether the tab is currently selected.
  icon: React.ReactNode; // The icon to display in the tab.
  text: string; // The text to display in the tab.
  onClick: () => void; // The callback function to be called when the tab is clicked.
}

/**
 * A tab component that displays an icon, text, and a circular progress bar.
 * The progress bar animates when the tab is selected.
 */
export default function Tab({ selected, icon, text, onClick }: TabProps) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    let interval: number | undefined;
    if (selected) {
      setProgress(0);
      interval = window.setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prevProgress + 1;
        });
      }, 15);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [selected]);


  React.useEffect(() => {
    let interval: number | undefined;
    if (!selected) {
      interval = window.setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress <= 0) {
            clearInterval(interval);
            return 0;
          }
          return prevProgress - 1;
        });
      }, 15);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [selected]);

  return (
    <div className={`w-fit cursor-pointer flex-1 flex items-center gap-4 py-8 px-14 z-50 relative border-solid border-x-[1px] border-y-2 hover:border-blue transition-all duration-300 ${selected ? 'bg-blue-100' : 'bg-white'} `} onClick={onClick}>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <CircularProgressBar progress={progress} size={56} strokeWidth={1} />
          <div className='absolute inset-0 flex items-center justify-center text-blue'>
            {icon}
          </div>
        </div>
      </div>
      <h1 className='text-xl text-nowrap'>{text}</h1>
    </div>
  );
}
