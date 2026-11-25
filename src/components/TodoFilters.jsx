const FILTERS = [
  { id: 'all', label: 'Все' },
  { id: 'active', label: 'Активные' },
  { id: 'completed', label: 'Выполненные' },
];

export function TodoFilters({
  filter,
  onFilterChange,
  activeCount,
  completedCount,
  onClearCompleted,
}) {
  return (
    <div className="todo-filters">
      <span className="active-count">Осталось задач: {activeCount}</span>

      <div className="filter-buttons" role="group" aria-label="Фильтр задач">
        {FILTERS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            className={filter === id ? 'active' : ''}
            aria-pressed={filter === id}
            onClick={() => onFilterChange(id)}
          >
            {label}
          </button>
        ))}
      </div>

      {completedCount > 0 && (
        <button type="button" onClick={onClearCompleted}>
          Очистить выполненные
        </button>
      )}
    </div>
  );
}