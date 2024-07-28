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
import Tour from "./Tour"

@Table({
    timestamps: true,
    tableName: "travels",
    modelName: "Travel"
})
class Travel extends Model{
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
        type: DataType.TEXT,
    })
    declare description: string;

    @Column({
        type: DataType.STRING,
    })
    declare slug: string;

    @Column({
        type: DataType.BOOLEAN,
    })
    declare is_public: Boolean;

    @Column({
        type: DataType.SMALLINT,
    })
    declare number_of_days: number;

    @CreatedAt
    declare created_at: Date;

    @UpdatedAt
    declare updated_at: Date;

    // @HasMany(() => Tour)
    // declare tours: Tour[];
}

export default Travel;