import React from "react";

import { FaStar } from "react-icons/fa";

const AppReviews = () => {
    return (
        <div className="py-10 bg-gray-100 px-4 md:px-8 lg:px-16">
            <div className="text-center mb-10">
                <h1 className="text-2xl md:text-3xl font-bold py-2 md:py-4">
                    What Our Happy <span className="text-pink-500">Clients</span> Say
                    About Us
                </h1>
                <p className="text-gray-600 text-sm md:text-base">
                    See what our users say about discovering powerful apps effortlessly with AppStore's smart and intuitive platform
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Item 1 */}
                <div className="bg-white p-6 rounded-2xl flex flex-col items-center text-center shadow-sm">
                    <div>
                        <img
                            className="w-24 h-24 rounded-full mb-4"
                            src='https://i.ibb.co.com/DPLDrXs2/amood-oyindamola-r1e-Ws-Gi8-Aw0-unsplash.jpg'
                            alt="Doctors"
                        />
                    </div>
                    <div>
                        <p className="text-lg font-semibold">Maria Khan</p>
                        <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 mt-4">
                            <p className="text-xs text-gray-600 mt-2">
                                What I appreciate most is the review and rating system. It encourages honest feedback and helps us iterate faster. Definitely a must-use for serious app developers.
                            </p>
                        </blockquote>
                        <p className="flex justify-center items-center py-3">
                            <FaStar color="orange" />
                            <FaStar color="orange" />
                            <FaStar color="orange" />
                            <FaStar color="orange" />
                            <FaStar color="orange" />
                        </p>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="bg-white p-6 rounded-2xl flex flex-col items-center text-center shadow-sm">
                    <div>
                        <img
                            className="w-24 h-24 rounded-full mb-4"
                            src='https://i.ibb.co.com/mCjMTg4p/IMG-20250508-WA0003.jpg'
                            alt=""
                        />
                    </div>
                    <div>
                        <p className="text-lg font-semibold">Ashik Chowdhury</p>
                        <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 mt-4">
                            <p className="text-xs text-gray-600 mt-2">
                                AppStore gave our productivity app the visibility we needed. We went from unknown to trending in just a week. The platform is smooth and super user-friendly!
                            </p>
                        </blockquote>
                        <p className="flex justify-center items-center py-3">
                            <FaStar color="orange" />
                            <FaStar color="orange" />
                            <FaStar color="orange" />
                            <FaStar color="orange" />
                            <FaStar color="orange" />
                        </p>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="bg-white p-6 rounded-2xl flex flex-col items-center text-center shadow-sm">
                    <div>
                        <img
                            className="w-24 h-24 rounded-full mb-4"
                            src='https://i.ibb.co.com/8DLLMRdV/IMG-20250508-WA0005.jpg'
                            alt="Doctors"
                        />
                    </div>
                    <div>
                        <p className="text-lg font-semibold">Rubel Biswas</p>
                        <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 mt-4">
                            <p className="text-xs text-gray-600 mt-2">
                                I love how easy it is to publish and manage apps. The real-time analytics and feedback system give us everything we need to improve user experience.
                            </p>
                        </blockquote>
                        <p className="flex justify-center items-center py-3">
                            <FaStar color="orange" />
                            <FaStar color="orange" />
                            <FaStar color="orange" />
                            <FaStar color="orange" />
                            <FaStar color="orange" />
                        </p>
                    </div>
                </div>

                {/* Item 4 */}
                <div className="bg-white p-6 rounded-2xl flex flex-col items-center text-center shadow-sm">
                    <div>
                        <img
                            className="w-24 h-24 rounded-full mb-4"
                            src='https://i.ibb.co.com/bRX6KNzX/IMG-20250508-WA0002.jpg'
                            alt="Doctors"
                        />
                    </div>
                    <div>
                        <p className="text-lg font-semibold">Jahangir Alom</p>
                        <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 mt-4">
                            <p className="text-xs text-gray-600 mt-2">
                                AppStore has completely changed how we promote our educational apps. The clean UI and category-based browsing made our apps more discoverable. We've seen a 40% boost in downloads!
                            </p>
                        </blockquote>
                        <p className="flex justify-center items-center py-3">
                            <FaStar color="orange" />
                            <FaStar color="orange" />
                            <FaStar color="orange" />
                            <FaStar color="orange" />
                            <FaStar color="orange" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppReviews;