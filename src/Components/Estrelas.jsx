import React from "react";
import { FaStar } from "react-icons/fa";

export default function Estrelas({ numberStars }) {
    return (
        <div style={{
            color: 'orange',
            textAlign: 'start',
            height: '1vw'
        }} >
            {[...Array(numberStars)].map((_, index) => {
                return (
                    <FaStar key={index} />
                )
            })}
        </div>
    );
}
