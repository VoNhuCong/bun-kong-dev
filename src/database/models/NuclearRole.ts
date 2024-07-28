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
    tableName: "NuclearRoles",
    modelName: "NuclearRole"
})


class NuclearRole extends Model {
    @Column({
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
    })
    declare id: string;

    @Column({
        type: DataType.STRING,
    })
    declare name: string;

    @Column({
        type: DataType.BOOLEAN,
    })
    declare needcheck: Boolean;

    @CreatedAt
    declare createdAt: Date;

    @UpdatedAt
    declare updatedAt: Date;
}


export default NuclearRole;