import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (host = "database_ignite"): Promise<Connection> => {
  const connOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(connOptions, {
      host,
    })
  );
};
