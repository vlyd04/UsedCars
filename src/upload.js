// import React, { useRef, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './upload.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUpload } from '@fortawesome/free-solid-svg-icons';

// function Upload({ addCarToDashboard }) {
//   const navigate = useNavigate();
//   const imageInputRef = useRef(null);

//   const [carSpecs, setCarSpecs] = useState({
//     value: '',
//     type: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCarSpecs((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleImageChange = () => {
//     const file = imageInputRef.current.files[0];
//     const reader = new FileReader();

//     reader.onloadend = () => {
//       // Pass the new car details to the parent component
//       addCarToDashboard({
//         id: Date.now(),
//         image: reader.result,
//         ...carSpecs,
//       });

//       // Clear the input fields
//       setCarSpecs({ value: '', type: '' });
//       // Do not clear the file input for ease of uploading multiple images with the same properties

//       // Navigate back to the dashboard (optional)
//       navigate('/');
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <>
//       <h2>Upload your images here</h2>
//       <div className='upload'>
//         {/* <img src="" /> */}
//         <div className='up'>       
//         <FontAwesomeIcon icon={faUpload} />
//                  </div>
//         <form>
//           <div>
//             <label htmlFor="image">Car Image:</label>
//             <input type="file" id="image" ref={imageInputRef} />
//             {console.log(imageInputRef, "imageInputRef===>")}
//           </div>
//           <div>
//             <label htmlFor="value">Car Name:</label>
//             <input
//               type="text"
//               id="value"
//               name="value"
//               value={carSpecs.value}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="type">Car Type:</label>
//             <input
//               type="text"
//               id="type"
//               name="type"
//               value={carSpecs.type}
//               onChange={handleInputChange}
//             />
//           </div>
//           <button type="button" onClick={handleImageChange}>
//             Upload Car
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Upload;

import React, { useRef, useState } from 'react';
import axios from 'axios';
import './upload.css';

function Upload({ addCarToDashboard }) {
  const imageInputRef = useRef(null);
  const [carSpecs, setCarSpecs] = useState({
    value: '',
    type: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCarSpecs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = async () => {
    const file = imageInputRef.current.files[0];
    if (file) {
      try {
        // Create a FormData object to send the file
        const formData = new FormData();
        formData.append('image', file);

        // Make a POST request to the server endpoint
        const response = await axios.post('http://localhost:3001/upload', formData);
        const { success, filePath } = response.data;

        if (success) {
          // Set the file path in carSpecs (you might want to save this in state or use it as needed)
          setCarSpecs((prev) => ({
            ...prev,
            image: filePath,
          }));
        }
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  const handleImageUpload = () => {
    // Pass the new car details to the parent component
    addCarToDashboard({
      id: Date.now(),
      ...carSpecs,
    });

    // Clear the input fields
    setCarSpecs({ value: '', type: '' });
  };

  return (
    <>
      <h2>Upload your images here</h2>
      <div className='upload'>
        <div className='up'>
          <input type="file" ref={imageInputRef} onChange={handleImageChange} />
        </div>
        <form>
          {/* Other form fields */}
          <button type="button" onClick={handleImageUpload}>
            Upload Car
          </button>
        </form>
      </div>
    </>
  );
}

export default Upload;

