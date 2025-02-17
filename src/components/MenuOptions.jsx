const MenuOptions = ({ setFilter, setSearch }) => {
    return (
      <div className="menu-options">
        <input type="text" placeholder="Search task..." onChange={(e) => setSearch(e.target.value)} />
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("today")}>Today</button>
        <button onClick={() => setFilter("thisWeek")}>This Week</button>
        <button onClick={() => setFilter("thisMonth")}>This Month</button>
      </div>
    );
  };
  
  export default MenuOptions;
  