import bcrypt from 'bcrypt';

async function checkPassword(requestPassword: string, hashedPassword: string) {
  return await bcrypt.compare(requestPassword, hashedPassword);
}
