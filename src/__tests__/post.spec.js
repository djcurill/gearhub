const { Post } = require('../resources/post');

describe('bike post schema', () => {
  test('title is required', async () => {
    expect.assertions(1);

    try {
      await Post.create({
        price: 50,
      });
    } catch (e) {
      expect(e).toBeTruthy();
    }
  });

  test('', () => {});

  test('no items in database', async () => {
    const result = await Post.find({}).exec();
    expect(result.length).toBe(0);
  });
});
