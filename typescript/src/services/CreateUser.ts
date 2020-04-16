
interface CreateUserData {
  name?: string,
  email: string,
  password: string
};

export default function CreateUser({ name, email, password }: CreateUserData) {
  const user = {
    name,
    email,
    password
  };

  return user;

}