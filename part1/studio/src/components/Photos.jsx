import styles from './Description.module.css';
import React from 'react';

export default function RecipePhoto(){
    return (
    <div>
        <img src ="https://www.thewholesomedish.com/wp-content/uploads/2019/06/The-Best-Classic-Tacos-550-240x240.jpg" alt="recipe photo" className = {styles.imageUpdates} />
    </div>
    )
}