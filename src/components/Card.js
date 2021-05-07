import styles from "../styles/card.module.css";

function Card(props) {
    const {

        image,
        name,
        area,
        category,
        cookingInstructions

    } = props;



    return (
        <div className={styles.card}>

            <h3>{`${name} (${area})`}</h3>
            <img className="cardImage" src={image} alt="card content" />
            <h4>{`Category: ${category}`}</h4>
            <h5>{cookingInstructions}</h5>

        </div>
    );
}

export default Card;
