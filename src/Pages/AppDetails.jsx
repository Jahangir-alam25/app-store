import { Link, useParams } from 'react-router';

import { useState } from 'react';
import { useLoaderData } from 'react-router';
import { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import userIcon from "../assets/user.png";




const AppDetails = () => {
  const { id } = useParams();
  const appData = useLoaderData()
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [hasInstalled, setHasInstalled] = useState(false);
  const { user } = use(AuthContext)


  const app = appData.find(app => app.id === id);
 


  const handleInstall = () => {
    setHasInstalled(!hasInstalled);
    
    
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (rating > 0 && comment) {
      const newReview = {
        user: user.displayName || "Anonymous",
        photo: user.photoURL || userIcon,
        comment: comment,
        rating: rating
      }
console.log(newReview.photo);
      setComments([
        ...comments,
        newReview
      ]);
      setComment("");  // Clear the input
      setRating(0);    // Reset the rating
    }
  };



  if (!app) return <p className="text-center mt-10">App not found</p>;

  return (
    <div className="py-4 md:py-10">
      <div className='bg-white p-5 rounded-2xl'>
        <div className='relative '>
        <img src={app.banner} alt={app.name} className="w-full h-52 sm:h-80 rounded-xl mb-6" />
        <p className='absolute top-4 left-4 bg-green-600 text-white px-4 py-1 rounded-lg'>Update Available</p>
        <p className='absolute bottom-4 left-4 bg-white p-1 rounded-md
         font-bold'>{app.bannerText}
        </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img src={app.thumbnail} alt={app.name} className="w-64 h-64 object-cover rounded-xl" />
          <div>
            <h1 className="text-3xl font-bold">{app.name}</h1>
            <p><strong>Developer:</strong> {app.developer}</p>
            <p><strong>Category:</strong> {app.category}</p>
            <p><strong>Downloads:</strong> {app.downloads.toLocaleString()}</p>
            <p><strong>Rating:</strong> ⭐ {app.rating}</p>
            <p className="my-4">{app.description}</p>

            <button
                onClick={handleInstall}
                className="px-10 py-2 mb-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                {hasInstalled ? "Uninstall" : "Install"}
              </button>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <ul className="list-disc list-inside">
            {app.features.map((feature, index) => <li key={index}>{feature}</li>)}
          </ul>
        </div>
        <p className="mt-4 font-bold">Do you want to install more apps? <Link to="/" className="text-blue-600 underline">Click Here</Link></p>
      </div>


      <div className='my-10'>
        <h1 className='text-3xl font-bold mb-7'>Reviews</h1>
        <div className="w-full p-4 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Add Your Comment and Rating</h3>
          <form onSubmit={handleCommentSubmit}>
            <div className="mb-4">
              <label className="block mb-2">Your Rating:</label>
              <div>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    disabled={!hasInstalled}
                    onClick={() => hasInstalled && setRating(star)}
                    className={`text-2xl transition ${rating >= star ? "text-yellow-400" : "text-gray-400"
                      } ${!hasInstalled ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Your Comment:</label>
              <textarea
                disabled={!hasInstalled}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className={`w-full px-4 py-2 border border-gray-300 rounded-md ${!hasInstalled ? "bg-gray-100 cursor-not-allowed" : ""
                  }`}
                placeholder={
                  hasInstalled
                    ? "Write your comment..."
                    : "Please install the app to write a comment"
                }
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={!hasInstalled}
              className={`w-full py-2 rounded-lg transition ${
                hasInstalled
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              Submit Review
            </button>
          </form>


        </div>
        <div className="mt-6">
          <h4 className="text-lg font-semibold mb-2">Comments:</h4>
          {comments.length > 0 ? (
            comments.map((item, index) => (
              <div key={index} className="mb-4 bg-gray-300 p-6 rounded-2xl">
                <div className='flex gap-9 border-b'>
                  <div className='flex gap-3 '>
                    <img
                      src={item.photo}
                      alt={item.user}
                      className="w-8 h-8 rounded-full inline-block"
                    />
                    <div>
                      <p> {item.user}</p>
                      <p> {new Date().toLocaleString()}</p>
                    </div>

                  </div>
                  <div className="flex items-center">
                    {[...Array(item.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">{item.comment}</p>
              </div>
            ))
          ) : (
            <p className='bg-gray-300 p-6 rounded-2xl'>No comments yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppDetails;






