import { useState } from 'react';
import Button from './Button.tsx';

function BarreMenue({
  className,
  setTab,
  tabs,
}: {
  className?: string;
  setTab: (tab: number) => void;
  tabs: string[]; // Onglets passés en props (dynamique)
}) {
  return (
    <div className={className}>
      {tabs.map((name, index) => (
        <Button key={index} name={name} onClick={() => setTab(index)} />
      ))}
    </div>
  );
}

export default BarreMenue;
