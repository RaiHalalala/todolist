import React, { FC } from 'react';
import { useDrag } from 'react-dnd';
import { MAIN_TYPE } from 'constants/dnd';

interface MovableItemProps {
  id: number;
}

const MovableItem: FC<MovableItemProps> = ({ id }) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: MAIN_TYPE,
      item: { id },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id],
  );
  return <div ref={drag}>item</div>;
};

export default MovableItem;
