"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initDB = initDB;

function initDB(firestore) {
  return {
    articlesDB: firestore().collection('articles'),
    lecturesDB: firestore().collection('lectures'),
    speakersDB: firestore().collection('Rabbis'),
    searchQueriesDB: firestore().collection('searchQueries'),
    questionsDB: firestore().collection('questions'),
    unansweredQuestionsDB: firestore().collection('postedQuestions'),
    postedQuestionsDB: firestore().collection('postedQuestions'),
    testimonialsDB: firestore().collection('Testimonials'),
    postedTestimonialsDB: firestore().collection('postedTestimonials'),
    recommendedDB: firestore().collection('recommended'),
    storeDB: firestore().collection('store'),
    topicsDB: firestore().collection('topics'),
    livestreamsDB: firestore().collection('livestreams'),
    playlistsDB: firestore().collection('playlists')
  };
}