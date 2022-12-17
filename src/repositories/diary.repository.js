const { Diary } = require('../../models');

class DiaryRepository {
  createDiary = async (title, images, content, weather) => {
    const createDiary = await Diary.create({
      title,
      images,
      content,
      weather,
    });
    return createDiary;
  };
}

module.exports = DiaryRepository;
