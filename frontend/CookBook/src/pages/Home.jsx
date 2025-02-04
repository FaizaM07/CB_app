import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bur from '../assets/Bur.jpg';
import dpp from '../assets/dpp.jpg';
import ps from '../assets/ps.jpg';
import InputForm from '../components/InputForm';
import Mod from '../components/Mod';
import RecipeItems from '../components/RecipeItems';

export default function Home() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const addRecipe = () => {
        let token = localStorage.getItem("token");
        if (token) navigate("/addRecipe");
        else {
            setIsOpen(true);
        }
    };

    return (
        <>
            <section className='home'>
                <div className='left'>
                    <h1>Food Recipe</h1>
                    <h5 style={{ 
    marginTop: '40px', // Increase margin to ensure it doesn't overlap
    fontSize: '16px', // Slightly larger font
    lineHeight: '1.8', 
    fontFamily: 'Arial, sans-serif', 
    position: 'relative',
    zIndex: 4, // Ensure it stays above any overlapping elements
}}>
    Unlock, organize, and savor your favorite recipes all in one place! From quick finds with tags to custom collections and favorites, Flavor Vault keeps your culinary creations just a tap away. Ready to build your ultimate recipe collection?
</h5>

                    
                    <button onClick={addRecipe}>Share your recipe</button>
                </div>
                <div className='right'>
                    <div className="image-container" style={{ position: 'relative', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '300px' }}>
                        <img
                            src={dpp}
                            alt="Food Item 1"
                            style={{
                                width: '220px',
                                height: '220px',
                                borderRadius: '50%',
                                position: 'absolute',
                                zIndex: 1,
                                top: '10px',
                                left: '-300px',
                                boxShadow: '0 8px 15px rgba(0, 0, 0, 0.3)',
                            }}
                        />
                        <img
                            src={bur}
                            alt="Food Item 2"
                            style={{
                                width: '310px',
                                height: '310px',
                                borderRadius: '50%',
                                position: 'absolute',
                                zIndex: 0,
                                top: '100px',
                                left: '-250px',
                                filter: 'blur(2px)',
                                boxShadow: '0 8px 15px rgba(0, 0, 0, 0.3)',
                            }}
                        />
                        <img
                            src={ps}
                            alt="Food Item 3"
                            style={{
                                width: '150px',
                                height: '150px',
                                borderRadius: '100%',
                                position: 'absolute',
                                zIndex: 2,
                                top: '150px',
                                left: '-350px',
                                boxShadow: '0 8px 15px rgba(0, 0, 0, 0.3)',
                            }}
                        />
                    </div>
                </div>
            </section>
            <div className='bg'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#000b76"
                        fillOpacity="0.7"
                        d="M0,64L24,85.3C48,107,96,149,144,149.3C192,149,240,107,288,117.3C336,128,384,192,432,192C480,192,528,128,576,117.3C624,107,672,149,720,192C768,235,816,277,864,266.7C912,256,960,192,1008,144C1056,96,1104,64,1152,74.7C1200,85,1248,139,1296,149.3C1344,160,1392,128,1416,112L1440,96L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
                    ></path>
                </svg>
            </div>
            {isOpen && (
                <Mod onClose={() => setIsOpen(false)}>
                    <InputForm setIsOpen={() => setIsOpen(false)} />
                </Mod>
            )}
            <div className='recipe'>
                <RecipeItems />
            </div>
        </>
    );
}
