import { tokenServices } from '../../services/token/token.services';
import { testUser } from '../../utils/test.utils';

describe('testing token service', () => {
  const { firstName, lastName } = testUser;
  let token: string;
  it('should be create a token', async () => {
    const createdToken = await tokenServices.createToken({
      id: 123123123123,
      firstName,
      lastName
    });
    expect(typeof createdToken).toBe('string');
    token = createdToken;
  });
  it('should be possible validate token', async () => {
    const payload = await tokenServices.verifyToken(token);
    expect(payload).toHaveProperty('id');
    expect(payload).toHaveProperty('firstName');
    expect(payload).toHaveProperty('lastName');
    expect(payload).toHaveProperty('iat');
    expect(payload).toHaveProperty('exp');
  });
});
