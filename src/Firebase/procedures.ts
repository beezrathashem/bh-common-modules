// import { IQuestionQuery } from 'bh-common-native-types/src/Interfaces/Questions';
// import { ILectureQuery } from 'bh-common-native-types/src/Interfaces/Lectures';
// import { IFixMe } from 'bh-common-native-types/src/Interfaces';

type IQuestionQuery = any;
type ILectureQuery = any;
type IFixMe = any;

interface IParams {
  query: IQuestionQuery | ILectureQuery | any;
  db: IFixMe;
  orderBy: string;
  filter: string;
}

const fetch = async (params: IParams) => {
  let snapshots;

  const { query, db, orderBy, filter } = params;

  if (!query || !db) {
    throw new Error('Something went wrong!');
  }

  const isLanguage = query.language && query.language !== '' && query.language !== 'Any';
  const isFilter = query.filter && query.filter !== '';
  const isSpeaker = query.speaker && query.speaker !== '';

  if (isLanguage && isSpeaker) {
    snapshots = await db
      .where('channelId', '==', query.speaker)
      .where('language', '==', query.language)
      .orderBy(orderBy, 'desc')
      .limit(20)
      .get();
  }
  if (isSpeaker) {
    snapshots = await db.where('channelId', '==', query.speaker).orderBy(orderBy, 'desc').limit(20).get();
  } else if (isFilter) {
    snapshots = await db.where(filter, '==', query.filter).orderBy(orderBy, 'desc').limit(20).get();
  } else if (isLanguage) {
    snapshots = await db.where('language', '==', query.language).orderBy(orderBy, 'desc').limit(20).get();
  } else {
    snapshots = await db.orderBy(orderBy, 'desc').limit(20).get();
  }

  return formatSnapshotData(snapshots);
};

const paginate = async (params: IParams) => {
  let snapshots;

  const { query, db, orderBy, filter } = params;

  if (!query || !db) {
    throw new Error('Something went wrong!');
  }

  const isLanguage = query.language && query.language !== '';
  const isFilter = query.filter && query.filter !== '';
  const isSpeaker = query.speaker && query.speaker !== '';

  if (isLanguage && isFilter && isSpeaker) {
    snapshots = await db
      .where(filter, '==', query.filter)
      .where('channelId', '==', query.speaker)
      .where('language', '==', query.language)
      .orderBy(orderBy, 'desc')
      .startAfter(query.lastVisible)
      .limit(20)
      .get();
  } else if (isLanguage && isFilter) {
    snapshots = await db
      .where(filter, '==', query.filter)
      .where('language', '==', query.language)
      .orderBy(orderBy, 'desc')
      .startAfter(query.lastVisible)
      .limit(20)
      .get();
  } else if (isLanguage && isSpeaker) {
    snapshots = await db
      .where('channelId', '==', query.speaker)
      .where('language', '==', query.language)
      .orderBy(orderBy, 'desc')
      .startAfter(query.lastVisible)
      .limit(20)
      .get();
  } else if (isFilter && isSpeaker) {
    snapshots = await db
      .where(filter, '==', query.filter)
      .where('language', '==', query.language)
      .orderBy(orderBy, 'desc')
      .startAfter(query.lastVisible)
      .limit(20)
      .get();
  } else if (isFilter || isSpeaker || isLanguage) {
    const secondCaseKey = isSpeaker ? 'channelId' : 'language';
    const singularFilterKey = isFilter ? filter : secondCaseKey;

    const secondCaseValue = isSpeaker ? query.speaker : query.language;
    const singularFilterValue = isFilter ? query.filter : secondCaseValue;

    snapshots = await db
      .where(singularFilterKey, '==', singularFilterValue)
      .orderBy(orderBy, 'desc')
      .startAfter(query.lastVisible)
      .limit(20)
      .get();
  } else {
    snapshots = await db.orderBy(orderBy, 'desc').startAfter(query.lastVisible).limit(20).get();
  }

  return formatSnapshotData(snapshots);
};

export function formatSnapshotData(snapshots: any) {
  const latestDoc = snapshots.docs[snapshots.docs.length - 1];
  const payload: any = [];
  snapshots.forEach(function (doc: any) {
    const data = {
      ...doc.data(),
      id: doc.id,
    };

    if (payload.some((item: any) => item.title && item.title == data.title)) {
      return;
    }
    payload.push(data);
  });
  return { payload, updatedLastVisible: latestDoc };
}

export default {
  fetch,
  paginate,
};
