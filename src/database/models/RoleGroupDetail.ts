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
    tableName: "RoleGroupDetails",
    modelName: "RoleGroupDetail"
})
export class RoleGroupDetail extends Model {
    @Column({
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
    })
    declare id: string;

    @Column({
        type: DataType.NUMBER,
    })
    declare roleGroupID: number;

    @Column({
        type: DataType.STRING,
    })
    declare nuclearRoleID: string;

    @CreatedAt
    declare createdAt: Date;

    @UpdatedAt
    declare updatedAt: Date;
}

export default RoleGroupDetail;