import EmptyView from './EmptyView';

export default function ItemList( {
    items,
    handleDeleteItem,
    handleToggleItem,
  }){
    return (
        <ul className="item-list">
        {items?.length === 0 && <EmptyView />}
        {items?.map((item) => {
          return (
            <Item
              key={item.id}
              item={item}
              onDelete={handleDeleteItem}
              onToggle={handleToggleItem}
            />
          );
        })}
        </ul>
    );
}