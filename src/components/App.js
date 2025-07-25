import {useState, useEffect} from 'react'

function App() {
    const URL = `https://dog.ceo/api/breeds/image/random`
    const [dogImage, setDogImage] = useState(null);

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => setDogImage(data.message))
            .catch(error => console.error('Error fetching data:', error));
    }, [URL])

  if (!dogImage) {
    return <p>Loading...</p>;
  }

  return <img src={dogImage} alt="A Random Dog" />;
}
  

export default App
