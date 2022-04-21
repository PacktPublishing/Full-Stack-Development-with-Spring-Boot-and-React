function MyList() {
  const data = [1, 2, 3, 4, 5];
  
  return (
    <div>
      <ul>
        { 
        data.map((number, index) =>
          <li key={index}>Listitem {number}</li>)
        }
      </ul>
    </div>
  );
};

export default MyList;
