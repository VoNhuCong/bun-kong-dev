import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    dialect: "mysql",
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    models: [__dirname + "/models"],
});

(async () => {
    try {
      await sequelize.authenticate();
      console.log('Kết nối cơ sở dữ liệu thành công');
    } catch (error) {
      console.error('Không thể kết nối tới cơ sở dữ liệu', error);
    }
  })();

export default sequelize;