
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
    tableName: "RoleGroups",
    modelName: "RoleGroup"
})

export class RoleGroup extends Model {
    @Column({
        primaryKey: true,
        type: DataType.NUMBER
    })
    declare id: number;

    @Column({
        type: DataType.STRING,
    })
    declare name: string;

    @CreatedAt
    declare createdAt: Date;

    @UpdatedAt
    declare updatedAt: Date;
}

export default RoleGroup;
