import React, { FC } from 'react';
import { useDrop } from 'react-dnd';
import { MAIN_TYPE } from 'constants/dnd';

interface ColumnProps {
  title: string;
}

const Column: FC<ColumnProps> = ({ children, title }) => {
  const [{}, drop] = useDrop(() => ({
    accept: MAIN_TYPE,
    drop: (item: { id: string; src: string }) => onDrop(),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const onDrop = () => {
    console.log('hello');
  };
  return (
    <div ref={drop}>
      <p>{title}</p>
      {children}
    </div>
  );
};

export default Column;
