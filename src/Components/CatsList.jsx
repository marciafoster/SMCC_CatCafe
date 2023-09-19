import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link
import './CatsList.css';

function CatsList({ cart, setCart }) {
    const [catBreeds, setCatBreeds] = useState([]);

    useEffect(() => {
        const url = 'https://cat-breeds.p.rapidapi.com/cat_breeds';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '8fa6f404aamsh9e19c8bd5889360p1458dejsn15bb211de743',
                'X-RapidAPI-Host': 'cat-breeds.p.rapidapi.com'
            }
        };
        fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                setCatBreeds(data);
            })
            .catch((error) => console.log(error));
    }, []);

    const addToCart = (breedObj) => {
        setCart([...cart, breedObj]);
    };

    return (
        <div className="cats-grid">
            <h4 style={{ marginTop: "200px" }}>At SMCC Cat Cafe or as we call it CATfé, we're passionate about feline friends and finding them their forever homes. Our mission is to connect you with the purrfect companion, one whisker at a time.

Explore our delightful selection of cat breeds, each with its unique charm and personality. Whether you're a fan of cuddly Persians, playful Siamese, or elegant Maine Coons, you're sure to find a furry friend that melts your heart.

Take your time to browse through our collection of adorable cat photos and learn about each breed's characteristics. From fluffy tails to twitching whiskers, every cat has a story to tell, and we're here to help you discover it.

Remember, adopting a cat is a lifelong commitment filled with joy, love, and, of course, a dash of mischief. If you're ready to embark on this exciting journey, Smack Cat Cafe is here to guide you every step of the way.

So, grab a cup of your favorite beverage, settle in, and start your adventure in finding your new furry family member. Your future feline friend is just a click away!

Thank you for visiting Smack Cat Cafe, where dreams of purrfect companionship come true.
<br></br>
<br></br>
Adoption Fee: $100
</h4>

<br></br>
<h1>CATalog</h1>
            <div className="cat-container">
                {catBreeds.map((breedObj) => {
                    return (
                        <div className="cat-card" key={breedObj.id}>
                            <h3>{breedObj.breed}</h3>
                            <img
                                src={breedObj.img !== "Not found" ? breedObj.img : "https://cdn1.vectorstock.com/i/1000x1000/12/30/black-silhouette-cat-vector-9051230.jpg"}
                                alt={breedObj.breed}
                            />
                            <Link to="/checkout"> {/* Use Link to navigate to Checkout */}
                                <button>Checkout</button>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default CatsList;
