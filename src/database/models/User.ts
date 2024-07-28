import {
    Table,
    Column,
    Model,
    DataType,
    CreatedAt,
    UpdatedAt,
    BeforeCreate,
    HasMany,
    PrimaryKey

}
from "sequelize-typescript"

@Table({
    timestamps: true,
    tableName: "users",
    modelName: "User"
})
class User extends Model{
    @Column({
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
    })
    declare id: string;

    @Column({
        type: DataType.STRING,
    })
    declare username: string;

    @Column({
        type: DataType.STRING,
    })
    declare password: string;

    @Column({
        type: DataType.STRING,
    })
    declare fullname: string;

    @Column({
        type: DataType.DATEONLY,
    })
    declare dateofbirth: Date;

    @Column({
        type: DataType.STRING,
    })
    declare email: string;

    @Column({
        type: DataType.STRING,
    })
    declare phone_number: string;

    @Column({
        type: DataType.BOOLEAN,
    })
    declare sex: Boolean;

    @Column({
        type: DataType.STRING,
    })
    declare avatar_url: string;

    @Column({
        type: DataType.INTEGER,
    })
    declare role_group_id: number;

    @Column({
        type: DataType.INTEGER,
    })
    declare account_status: number;

    @Column({
        type: DataType.STRING(1000),
    })
    declare accesstoken: string;

    @Column({
        type: DataType.STRING(1000),
    })
    declare refreshtoken: string;

    @CreatedAt
    declare createdAt: Date;

    @UpdatedAt
    declare updatedAt: Date;

    // @HasMany(() => Tour)
    // declare tours: Tour[];
}

export default User;