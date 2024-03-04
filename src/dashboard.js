import React, { useState, useEffect } from 'react';
import Upload from './upload';
import './dashboard.css'

function Dashboard() {
  const initialArray = [
    {
      id: 1,
      group: "under5",
      image: "https://images10.gaadi.com/usedcar_image/3711460/original/b6a41ef0-c66f-44f4-a1c4-8d89472c1909__43.jpg?imwidth=640",
      value: "2021 Renault Triber RXT",
      type: "Renault",
    },
    {
      id: 2,
      group: "under5",
      image: "https://images10.gaadi.com/usedcar_image/3620375/original/54798cbd-7052-4396-b103-8899edb28489__44.jpg?imwidth=640",
      value: "2016 Renault KWID RXT",
      type: "Renault",
    },
    {
      id: 3,
      group: "under5",
      image: "https://images10.gaadi.com/usedcar_image/3714321/original/ebdc2381-f1d8-4063-ad89-d4c86d52d5fe__43.jpg?imwidth=640",
      value: "2013 Volkswagen Polo Petrol Highline 1.2L",
      type: "Volkswagen",
    },
    {
      id: 4,
      group: "under15",
      image: "https://images10.gaadi.com/usedcar_image/3714694/original/ab934b4f-7ab5-47aa-8221-2a9844f13680__43.jpg?imwidth=640",
      value: "2012 Honda Brio S MT",
      type: "Honda",
    },
    {
      id: 5,
      group: "under10",
      image: "https://images10.gaadi.com/usedcar_image/3586109/original/d00840fa-5741-492e-b7c8-a3dc0f140d98__44.jpg?imwidth=640",
      value: "2017 Hyundai i20 Asta 1.2",
      type: "Hyundai",
    },
    {
      id: 6,
      group: "under15",
      image: "https://images10.gaadi.com/usedcar_image/3714404/original/62fb6f58-78d2-4487-920d-1b837cd4a851__43.jpg?imwidth=640",
      value: "2019 Mahindra XUV300 W8 Diesel BSIV",
      type: "Mahindra",
    },
    {
      id: 7,
      group: "under10",
      image: "https://images10.gaadi.com/usedcar_image/3647444/original/a9da82f1-ec2b-4ca6-b101-a47bbf6b3565__44.jpg?imwidth=640",
      value: "2018 Honda Jazz 1.5 SV i DTEC",
      type: "Honda",
    },
    {
      id: 8,
      group: "under5",
      image: "https://images10.gaadi.com/usedcar_image/3618636/original/44aa60c1-d356-47c6-ae39-64668990c1fd__43.jpg?imwidth=640",
      value: "2012 Maruti Swift Dzire VDi",
      type: "Maruti",
    },
    {
      id: 9,
      group: "under10",
      image: "https://images10.gaadi.com/usedcar_image/3537185/original/7ffae503-99e1-4e53-888d-d76a17883a74__43.jpg?imwidth=640",
      value: "2021 Tata Altroz XZ Plus Turbo BSVI",
      type: "Tata",
    },
    {
      id: 10,
      group: "under15",
      image: "https://images10.gaadi.com/usedcar_image/3664671/original/8f03cd21-777e-48a6-abf5-c45a65f159fe__43.jpg?imwidth=640",
      value: "2022 Tata Nexon XZA Plus AMT BSVI",
      type: "Tata",
    },];

  const [carArr, setCarArr] = useState(() => {
    const storedArray = initialArray;
    return storedArray;
  });

  const [selectedGroup, setSelectedGroup] = useState('');
  const [selectedTypes, setSelectedTypes] = useState([]);

  // useEffect(() => {
  //   localStorage.setItem('carArray', JSON.stringify(carArr));
  // }, [carArr]);
  // ...

useEffect(() => {
  // Fetch data from the server when the component mounts
  fetch('http://localhost:3001/api/cars')
    .then(response => response.json())
    .then(data => setCarArr(data))
    .catch(error => console.error('Error fetching data:', error));
}, []);


 

  
  

  const filterCars = (group, types) => {
    let filteredItems = initialArray;

    if (group) {
      filteredItems = filteredItems.filter((item) => item.group === group);
    }
    if (types.length > 0) {
      filteredItems = filteredItems.filter((item) => types.includes(item.type));
    }
    setCarArr(filteredItems);
  };

  const resetFilter = () => {
    setCarArr(initialArray);
    setSelectedGroup('');
    setSelectedTypes([]);
  };

  const handleGroupButtonClick = (group) => {
    setSelectedGroup(group);
    filterCars(group, selectedTypes);
  };

  const handleCheckboxChange = (type) => {
    const updatedTypes = selectedTypes.includes(type)
      ? selectedTypes.filter((selectedType) => selectedType !== type)
      : [...selectedTypes, type];

    setSelectedTypes(updatedTypes);
    filterCars(selectedGroup, updatedTypes);
  };

  // const addCarToDashboard = (newCar) => {
  //   setCarArr((prevCars) => [...prevCars, newCar]);
  // };

  const addCarToDashboard = (newCar) => {
    // Send the new car data to the server
    fetch('http://localhost:3001/api/cars', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCar),
    })
      .then(response => response.json())
      .then(data => setCarArr(prevCars => [...prevCars, data]))
      .catch(error => console.error('Error adding car:', error));
  };

  return (
    <>
      <div className='cont'>
        <h1>Car Website</h1>
        <div className='sec'>
          <div className="btn-check">
            <h2>Filter by Price:</h2>
            <button
              className={selectedGroup === 'under5' ? 'active' : ''}
              onClick={() => handleGroupButtonClick('under5')}
            >
              Under 5 lakhs
            </button>
            <button
              className={selectedGroup === 'under10' ? 'active' : ''}
              onClick={() => handleGroupButtonClick('under10')}
            >
              Under 10 lakhs
            </button>
            <button
              className={selectedGroup === 'under15' ? 'active' : ''}
              onClick={() => handleGroupButtonClick('under15')}
            >
              Under 15 lakhs
            </button>
            <button className={selectedGroup === '' ? 'active' : ''} onClick={resetFilter}>
              All
            </button>
            <h2>Filter by Brand:</h2>
            {Array.from(new Set(initialArray.map((car) => car.type))).map((type) => (
              <div key={type}>
                <input
                  type="checkbox"
                  id={type}
                  value={type}
                  checked={selectedTypes.includes(type)}
                  onChange={() => handleCheckboxChange(type)}
                />
                <label htmlFor={type}>{type}</label>
              </div>
            ))}
          </div>
          <div className='new'>
            <Upload addCarToDashboard={addCarToDashboard} />
          </div>
        </div>
        <div>
          <div className='grid-container'>
            {carArr.map((car) => (
              <div key={car.id} className="car-card">
                <img src={car.image} alt={car.value} />
                <p>{car.value}</p>
                <p>{car.type}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}

export default Dashboard;




