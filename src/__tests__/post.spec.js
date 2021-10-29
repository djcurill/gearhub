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
});
