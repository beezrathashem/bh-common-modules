// import { IQuestionQuery } from 'bh-common-native-types/src/Interfaces/Questions';
// import { IQuestionItem } from 'bh-common-native-types/src/Interfaces/Writings';

type IQuestionQuery = any;
type IQuestionItem = any;

import procedures, { formatSnapshotData } from './procedures';

const orderBy = 'timestamp';
const filter = 'topic';

export default (dp: any) => ({
  fetch: async (questionQuery: IQuestionQuery) => {
    const db = questionQuery.isUnanswered ? dp.unansweredQuestionsDB : dp.questionsDB;
    return await procedures.fetch({ query: questionQuery, db, orderBy, filter });
  },
  fetchUser: async (questionQuery) => {
    const {lastVisible} = questionQuery
    const db = questionQuery?.isUnanswered ? dp.unansweredQuestionsDB : dp.questionsDB;
    const baseQuery = db.where('user_id', '==', questionQuery.userId)
    const query = lastVisible ? baseQuery.startAfter(lastVisible) : baseQuery
    const doc = await query.limit(20).get();
    return formatSnapshotData(doc);
  },
  paginate: async (questionQuery: IQuestionQuery) => {
    const db = questionQuery.isUnanswered ? dp.unansweredQuestionsDB : dp.questionsDB;
    return await procedures.paginate({ query: questionQuery, db, orderBy, filter });
  },
  deleteQ: async (question: IQuestionItem) => {
    return await dp.unansweredQuestionsDB.doc(question.id).delete();
  },
  answerQ: async (question: IQuestionItem) => {
    await dp.questionsDB.doc(question.id).set({ ...question, timestamp: new Date().getTime() });
    return await dp.unansweredQuestionsDB.doc(question.id).delete();
  },
  createQ: async (question: IQuestionItem) => {
    return await dp.unansweredQuestionsDB.add({ ...question, timestamp: new Date().getTime() });
  },
  fetchById: async (id: string) => {
    const doc = await dp.questionsDB.doc(id).get();
    return doc.data();
  },
});
