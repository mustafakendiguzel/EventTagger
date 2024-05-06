import mongoose from 'mongoose';

export const connectDatabase = async () => {
  mongoose
    .connect('')
    .then(() => {
      console.log('Database bağlantısı başarılı');
    })
    .catch((err) => {
      console.error(`Database bağlantısı başarısız\n ${err}`);
      throw err;
    });
};
