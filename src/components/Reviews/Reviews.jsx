import "./Reviews.css";
import { useState } from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { reviewsData } from "../../data";

const Reviews = () => {
  const [reviews, setReviews] = useState(reviewsData);
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 0,
    text: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleRatingChange = (rating) => {
    setNewReview({ ...newReview, rating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.text.trim() === "") return;

    const review = {
      id: reviews.length + 1,
      name: newReview.name.trim() || "Аноним",
      date: new Date().toLocaleDateString("ru-RU"), // Формат даты для России
      rating: newReview.rating,
      text: newReview.text.trim(),
    };

    setReviews([review, ...reviews]);
    setNewReview({ name: "", rating: 0, text: "" });
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="star filled" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="star half-filled" />);
      } else {
        stars.push(<FaRegStar key={i} className="star" />);
      }
    }

    return stars;
  };

  return (
    <div className="reviews-container arsenal-sc-bold">
      <h1 className="reviews-title">Отзывы</h1>

      <div className="add-review">
        <h3>Оставить отзыв</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Имя (необязательно):</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newReview.name}
              onChange={handleInputChange}
              placeholder="Ваше имя"
            />
          </div>

          <div className="form-group">
            <label>Оценка:</label>
            <div className="rating-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => handleRatingChange(star)}
                  className="star-input"
                >
                  {star <= newReview.rating ? (
                    <FaStar className="star filled" />
                  ) : (
                    <FaRegStar className="star" />
                  )}
                </span>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="text">Отзыв:</label>
            <textarea
              id="text"
              name="text"
              value={newReview.text}
              onChange={handleInputChange}
              placeholder="Ваш отзыв..."
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Отправить
          </button>
        </form>
      </div>

      <div className="reviews-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-header">
              <div className="review-name">{review.name}</div>
              <div className="review-date">{review.date}</div>
            </div>
            <div className="review-rating">{renderStars(review.rating)}</div>
            <div className="review-text">{review.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
