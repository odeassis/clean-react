import { faker } from "@faker-js/faker";
import axios from "axios";

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  mockedAxios.post.mockResolvedValue({
    data: { name: faker.internet.userName(), email: faker.internet.email(), },
    status: faker.random.numeric()
  });

  return mockedAxios;
}