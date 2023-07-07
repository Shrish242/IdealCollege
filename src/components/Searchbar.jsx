import React, { useState } from 'react';

const Searchbar = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = data.filter((value) => {
      return value.college.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === '') {
      setFilteredData([]);
    }
    else
    setFilteredData(newFilter);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={handleFilter}
          className="bg-blue-200 rounded-full absolute px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent xs:right-[25%] xs:top-[2%] xs:w-40 md:right-[50%] md:w-60"
          placeholder={placeholder}
        />
      </div>
      {filteredData.length !== 0 && (
        <div className="bg-slate-100 absolute left-[400px] top-[50px] overflow-auto h-40 rounded-lg">
          {filteredData.map((value, key) => (
            <a className="dataitem" href={value.link} target="_blank" key={key}>
              <p className="text-emerald-700 h-[40px] font-poppins sm:text-xs font-bold my-5 text-center hover:bg-violet-200">
                {value.college}
              </p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
