import { useParams } from 'react-router';
// import { useContext, useState } from 'react';
// import { AuthContext } from '../context/AuthProvider';
// import appData from '../data/apps.json';
import { useState } from 'react';
import { useLoaderData } from 'react-router';


const user = {
    username: "john_doe",
    avatar: "https://i.pravatar.cc/100?img=3", // Sample avatar
  };

const AppDetails = () => {
  const { id } = useParams();
  const appData =useLoaderData()
//   const { user } = useContext(AuthContext);
  const app = appData.find(app => app.id === id);

  const [reviews, setReviews] = useState(app.reviews || []);
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState('');

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (reviewText && reviewRating >= 1 && reviewRating <= 5) {
      const newReview = {
        user: user.displayName || "Anonymous",
        comment: reviewText,
        rating: Number(reviewRating)
      };
      setReviews([...reviews, newReview]);
      setReviewText('');
      setReviewRating('');
    }
  };

  if (!app) return <p className="text-center mt-10">App not found</p>;

  return (
    <div className="p-4 md:p-10 max-w-5xl mx-auto">
      <img src={app.banner} alt={app.name} className="w-full h-60 object-cover rounded-xl mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src={app.thumbnail} alt={app.name} className="w-full rounded-xl" />
        <div>
          <h1 className="text-3xl font-bold">{app.name}</h1>
          <p><strong>Developer:</strong> {app.developer}</p>
          <p><strong>Category:</strong> {app.category}</p>
          <p><strong>Downloads:</strong> {app.downloads.toLocaleString()}</p>
          <p><strong>Rating:</strong> ⭐ {app.rating}</p>
          <p className="my-4">{app.description}</p>
          <button className="btn btn-primary">Install</button>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <ul className="list-disc list-inside">
          {app.features.map((feature, index) => <li key={index}>{feature}</li>)}
        </ul>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        {reviews.map((rev, index) => (
          <div key={index} className="bg-gray-100 p-3 mb-2 rounded">
            <p><strong>{rev.user}</strong> - ⭐ {rev.rating}</p>
            <p>{rev.comment}</p>
          </div>
        ))}

        <form onSubmit={handleSubmitReview} className="mt-6 space-y-3">
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Write your review"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            required
          ></textarea>
          <input
            type="number"
            className="input input-bordered w-full"
            placeholder="Rating (1 to 5)"
            value={reviewRating}
            onChange={(e) => setReviewRating(e.target.value)}
            min="1"
            max="5"
            required
          />
          <button type="submit" className="btn btn-success">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default AppDetails;
