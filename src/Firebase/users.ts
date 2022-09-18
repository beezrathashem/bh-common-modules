
type IUser = {
    email: string;
    phone_number: string;
}

export default (dp: any) => ({
  fetch: async (userId: string) => {
    const doc = await dp.usersDB.doc(userId).get();
    return doc.data();
  },
  delete: async (userId: string) => {
    return await dp.usersDB.doc(userId).delete();
  },
  create: async (user: IUser) => {
    return await dp.usersDB.add({ ...user, timestamp: new Date().getTime() });
  },
});
