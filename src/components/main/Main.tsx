import Column from 'components/DnD/Column';
import MovableItem from 'components/DnD/MovableItem';

const Main = () => {
  return (
    <div>
      <Column title="column 1">
        <MovableItem id={1} />
      </Column>
      <Column title="column 2">
        <MovableItem id={2} />
      </Column>
      <Column title="column 3">
        <MovableItem id={3} />
      </Column>
    </div>
  );
};

export default Main;
