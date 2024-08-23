import React from 'react';
import styles from './Description.module.css';


  function RecipeAuthor() {
    const authorLink = 'https://www.thewholesomedish.com/';
    const authorPhoto = 'https://secure.gravatar.com/avatar/0d71c98a05274a2ea539f1b903cebb6c?s=92&d=mm&r=pg';
    const authorName = 'Amanda Finks';
    return  (
        
            <div className = {styles.recipeAuthorBlock}>
               <img src={authorPhoto} alt = "A picture of the author smiling posed against a wooden backdrop." className={styles.imageUpdates} />
               <div>
                  <h3>{authorName}</h3>
                  <a href={authorLink}>The Wholesome Dish</a> 
               </div>
            </div>
         );
}

class RecipeDescription extends React.Component{
    render() {
        return (
            <div>
                <div>
                    <h1>Recipe Title</h1>
                    <p>Short recipe description</p>
                </div>
                <RecipeAuthor />
            </div>
        );
    }
}

export default RecipeDescription;